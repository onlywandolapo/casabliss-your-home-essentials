import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Server-side product catalog with validated prices
// This prevents price tampering from client-side localStorage manipulation
const PRODUCTS: Record<string, { name: string; price: number; inStock: boolean }> = {
  'ng-001': { name: 'Jollof Rice & 2 Beef', price: 1500, inStock: true },
  'ng-002': { name: 'Fried Rice & 2 Beef', price: 1500, inStock: true },
  'ng-003': { name: 'White Rice & Stew with 2 Beef', price: 1500, inStock: true },
  'ng-004': { name: 'White Rice & Stew with 1 Egg', price: 1500, inStock: true },
  'ng-005': { name: 'Jollof Spaghetti', price: 1500, inStock: true },
  'ng-006': { name: 'Semo & Egusi Soup with 2 Beef', price: 1500, inStock: true },
  'ng-007': { name: 'Semo & Ewedu Soup with 2 Beef', price: 1500, inStock: true },
  'ng-009': { name: 'Eba & Egusi Soup with 2 Beef', price: 1500, inStock: true },
  'ng-010': { name: 'Eba & Ewedu Soup with 2 Beef', price: 1500, inStock: true },
  'ng-011': { name: 'Eba & Eforiro Soup with 2 Beef', price: 1500, inStock: true },
  'ng-012': { name: 'Ofada Rice & Sauce', price: 2000, inStock: true },
  'ng-013': { name: 'Porridge Yam', price: 1300, inStock: true },
  'ng-014': { name: 'Amala & Ewedu with Gbegiri', price: 1500, inStock: true },
  'pr-001': { name: 'Extra Beef (1 piece)', price: 200, inStock: true },
  'pr-002': { name: 'Extra Chicken (1 piece)', price: 500, inStock: true },
  'pr-003': { name: 'Extra Fish (1 piece)', price: 800, inStock: true },
  'pr-004': { name: 'Extra Egg (1 piece)', price: 300, inStock: true },
  'sn-001': { name: 'Meat Pie', price: 700, inStock: true },
  'sn-002': { name: 'Sausage Roll', price: 500, inStock: true },
  'sn-003': { name: 'Chicken Pie', price: 700, inStock: true },
  'sn-004': { name: 'Egg Roll', price: 500, inStock: true },
  'sn-005': { name: 'Frank Rolls', price: 800, inStock: true },
  'bv-001': { name: 'Coca-Cola', price: 500, inStock: true },
  'bv-002': { name: 'Fanta Orange', price: 500, inStock: true },
  'bv-003': { name: 'Sprite', price: 500, inStock: true },
  'bv-004': { name: '7UP', price: 500, inStock: true },
  'bv-005': { name: 'Trophy Lager', price: 700, inStock: true },
  'bv-006': { name: 'Guinness Stout', price: 800, inStock: true },
  'bv-007': { name: 'Heineken', price: 900, inStock: true },
  'bv-008': { name: 'Goldberg Lager', price: 600, inStock: true },
  'bv-009': { name: 'Chi Active', price: 500, inStock: true },
  'bv-010': { name: 'Chi Exotic', price: 500, inStock: true },
  'bv-011': { name: 'Fearless Energy Drink', price: 400, inStock: true },
  'bv-012': { name: 'Malta Guinness', price: 500, inStock: true },
  'bv-014': { name: 'Bottled Water', price: 200, inStock: true },
};

interface CartItem {
  product_id: string;
  quantity: number;
}

interface OrderRequest {
  items: CartItem[];
  delivery_address?: string;
  notes?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase client with user's auth context
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    );

    // Validate JWT and get user
    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const userId = claimsData.claims.sub as string;

    // Parse and validate request body
    const body: OrderRequest = await req.json();
    
    if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Order must contain at least one item' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate items and calculate server-side total
    let serverTotal = 0;
    const validatedItems: Array<{
      product_id: string;
      product_name: string;
      quantity: number;
      price_per_item: number;
    }> = [];

    for (const item of body.items) {
      // Validate product_id
      if (!item.product_id || typeof item.product_id !== 'string') {
        return new Response(
          JSON.stringify({ error: 'Invalid product ID' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validate quantity
      const quantity = Number(item.quantity);
      if (!Number.isInteger(quantity) || quantity <= 0 || quantity > 100) {
        return new Response(
          JSON.stringify({ error: `Invalid quantity for product ${item.product_id}` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Look up product in server-side catalog
      const product = PRODUCTS[item.product_id];
      if (!product) {
        return new Response(
          JSON.stringify({ error: `Product ${item.product_id} not found` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      if (!product.inStock) {
        return new Response(
          JSON.stringify({ error: `Product ${product.name} is out of stock` }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Use server-side price (not client-provided price)
      const itemTotal = product.price * quantity;
      serverTotal += itemTotal;

      validatedItems.push({
        product_id: item.product_id,
        product_name: product.name,
        quantity: quantity,
        price_per_item: product.price,
      });
    }

    // Validate delivery address length if provided
    if (body.delivery_address && body.delivery_address.length > 500) {
      return new Response(
        JSON.stringify({ error: 'Delivery address is too long' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate notes length if provided
    if (body.notes && body.notes.length > 1000) {
      return new Response(
        JSON.stringify({ error: 'Notes are too long' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: userId,
        total_price: serverTotal,
        delivery_address: body.delivery_address?.trim() || null,
        notes: body.notes?.trim() || null,
        status: 'pending',
      })
      .select()
      .single();

    if (orderError) {
      console.error('Error creating order:', orderError);
      return new Response(
        JSON.stringify({ error: 'Failed to create order' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert order items
    const orderItems = validatedItems.map(item => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.product_name,
      quantity: item.quantity,
      price_per_item: item.price_per_item,
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) {
      console.error('Error creating order items:', itemsError);
      // Note: In production, you might want to delete the order or use a transaction
      return new Response(
        JSON.stringify({ error: 'Failed to create order items' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        order: {
          id: order.id,
          total_price: order.total_price,
          status: order.status,
          created_at: order.created_at,
        }
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
