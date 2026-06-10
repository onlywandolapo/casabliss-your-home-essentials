import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Server-side product catalog with validated prices
// This prevents price tampering from client-side localStorage manipulation
const PRODUCTS: Record<string, { name: string; price: number; inStock: boolean }> = {
  'ng-001': { name: "Jollof Rice & 2 Beef", price: 1500, inStock: true },
  'ng-002': { name: "Fried Rice & 2 Beef", price: 1500, inStock: true },
  'ng-003': { name: "White Rice & Stew with 2 Beef", price: 1500, inStock: true },
  'ng-004': { name: "White Rice & Stew with 1 Egg", price: 1500, inStock: true },
  'ng-005': { name: "Jollof Spaghetti", price: 1500, inStock: true },
  'ng-006': { name: "Semo & Egusi Soup with 2 Beef", price: 1500, inStock: true },
  'ng-007': { name: "Semo & Ewedu Soup with 2 Beef", price: 1500, inStock: true },
  'ng-009': { name: "Eba & Egusi Soup with 2 Beef", price: 1500, inStock: true },
  'ng-010': { name: "Eba & Ewedu Soup with 2 Beef", price: 1500, inStock: true },
  'ng-011': { name: "Eba & Eforiro Soup with 2 Beef", price: 1500, inStock: true },
  'ng-012': { name: "Ofada Rice & Sauce", price: 2000, inStock: true },
  'ng-013': { name: "Porridge Yam", price: 1300, inStock: true },
  'ng-014': { name: "Amala & Ewedu with Gbegiri", price: 1500, inStock: true },
  'pr-001': { name: "Extra Beef (1 piece)", price: 200, inStock: true },
  'pr-002': { name: "Extra Chicken (1 piece)", price: 500, inStock: true },
  'pr-003': { name: "Extra Fish (1 piece)", price: 800, inStock: true },
  'pr-004': { name: "Extra Egg (1 piece)", price: 300, inStock: true },
  'sn-001': { name: "Meat Pie", price: 800, inStock: true },
  'sn-002': { name: "Sausage Roll", price: 700, inStock: true },
  'sn-003': { name: "Chicken Pie", price: 800, inStock: true },
  'sn-004': { name: "Egg Roll", price: 500, inStock: true },
  'sn-005': { name: "Frank Rolls", price: 750, inStock: true },
  'bv-001': { name: "Coca-Cola", price: 500, inStock: true },
  'bv-002': { name: "Fanta Orange", price: 500, inStock: true },
  'bv-003': { name: "Sprite", price: 500, inStock: true },
  'bv-004': { name: "7UP", price: 500, inStock: true },
  'bv-005': { name: "Trophy Lager", price: 1000, inStock: true },
  'bv-006': { name: "Guinness Stout", price: 1200, inStock: true },
  'bv-007': { name: "Heineken", price: 1200, inStock: true },
  'bv-008': { name: "Goldberg Lager", price: 1200, inStock: true },
  'bv-009': { name: "Chi Active", price: 800, inStock: true },
  'bv-010': { name: "Chi Exotic", price: 800, inStock: true },
  'bv-011': { name: "Fearless Energy Drink", price: 400, inStock: true },
  'bv-012': { name: "Malta Guinness", price: 700, inStock: true },
  'bv-014': { name: "Bottled Water", price: 200, inStock: true },
  'ng-101': { name: "Jollof Rice (Plain)", price: 1400, inStock: true },
  'ng-102': { name: "Fried Rice (Plain)", price: 1400, inStock: true },
  'ng-103': { name: "White Rice (Plain)", price: 900, inStock: true },
  'ng-104': { name: "Jollof Rice (Half)", price: 500, inStock: true },
  'ng-105': { name: "Fried Rice (Half)", price: 500, inStock: true },
  'ng-106': { name: "White Rice (Half)", price: 500, inStock: true },
  'ng-107': { name: "Friedrice & Jollof Combo", price: 1400, inStock: true },
  'ng-108': { name: "Jollof Rice & Spaghetti", price: 900, inStock: true },
  'ng-109': { name: "White Rice & Spaghetti", price: 900, inStock: true },
  'ng-110': { name: "Fried Rice & Spaghetti", price: 1400, inStock: true },
  'ng-111': { name: "Spaghetti", price: 1400, inStock: true },
  'ng-112': { name: "Spaghetti (Half)", price: 500, inStock: true },
  'ng-113': { name: "Eba & Bitterleaf Soup", price: 900, inStock: true },
  'ng-114': { name: "Eba & Efo Riro", price: 900, inStock: true },
  'ng-115': { name: "Eba & Egusi Soup", price: 900, inStock: true },
  'ng-116': { name: "Semo & Efo Riro", price: 900, inStock: true },
  'ng-117': { name: "Semo & Egusi", price: 900, inStock: true },
  'ng-118': { name: "Eba", price: 500, inStock: true },
  'ng-119': { name: "Semovita", price: 300, inStock: true },
  'ng-120': { name: "Pounded Yam", price: 600, inStock: true },
  'ng-121': { name: "Boiled Yam", price: 500, inStock: true },
  'ng-122': { name: "Soup (Small Bowl)", price: 500, inStock: true },
  'ng-123': { name: "Soup (Large Bowl)", price: 1000, inStock: true },
  'ng-124': { name: "Extra Swallow", price: 500, inStock: true },
  'ng-125': { name: "Extra Ofada Rice", price: 1000, inStock: true },
  'ng-126': { name: "Ofada Sauce", price: 1500, inStock: true },
  'ng-127': { name: "Beans Porridge", price: 1400, inStock: true },
  'ng-128': { name: "Ewa Agoyin", price: 500, inStock: true },
  'ng-129': { name: "Pap (Akamu)", price: 500, inStock: true },
  'ng-130': { name: "Indomie Noodles", price: 2000, inStock: true },
  'ng-131': { name: "Indomie with Hotdog", price: 2500, inStock: true },
  'pr-101': { name: "Fried Fish", price: 1500, inStock: true },
  'pr-102': { name: "Fish Head", price: 800, inStock: true },
  'pr-103': { name: "Round Fish", price: 700, inStock: true },
  'pr-104': { name: "Fish Tail", price: 2000, inStock: true },
  'pr-105': { name: "Turkey", price: 3000, inStock: true },
  'pr-106': { name: "Turkey (Small)", price: 2000, inStock: true },
  'pr-107': { name: "Grilled Chicken (Small)", price: 500, inStock: true },
  'pr-108': { name: "Grilled Chicken (Medium)", price: 1000, inStock: true },
  'pr-109': { name: "Grilled Chicken (Large)", price: 1500, inStock: true },
  'pr-110': { name: "Grilled Chicken (Extra Large)", price: 2000, inStock: true },
  'pr-111': { name: "Sausage", price: 700, inStock: true },
  'pr-112': { name: "Hotdog", price: 700, inStock: true },
  'pr-113': { name: "Ponmo", price: 500, inStock: true },
  'pr-114': { name: "Big Meat", price: 1000, inStock: true },
  'pr-115': { name: "Small Meat", price: 300, inStock: true },
  'pr-116': { name: "Fried Egg", price: 500, inStock: true },
  'pr-117': { name: "Moi Moi", price: 700, inStock: true },
  'pr-118': { name: "Fried Plantain (Dodo)", price: 500, inStock: true },
  'pr-119': { name: "Beans", price: 500, inStock: true },
  'pr-120': { name: "Salad", price: 500, inStock: true },
  'sn-101': { name: "Donut", price: 500, inStock: true },
  'sn-102': { name: "Jam Donut", price: 600, inStock: true },
  'sn-103': { name: "Metro Roll", price: 700, inStock: true },
  'sn-104': { name: "Chin Chin (Small)", price: 200, inStock: true },
  'sn-105': { name: "Chin Chin (Large)", price: 600, inStock: true },
  'sn-106': { name: "Puff Puff", price: 200, inStock: true },
  'sn-107': { name: "Fish Roll", price: 600, inStock: true },
  'sn-108': { name: "Small Chops", price: 1500, inStock: true },
  'sn-109': { name: "Cheese Steak", price: 3000, inStock: true },
  'sn-110': { name: "Tightnut Pastry", price: 2700, inStock: true },
  'sn-111': { name: "Parfait (Small)", price: 2000, inStock: true },
  'sn-112': { name: "Parfait (Big)", price: 3700, inStock: true },
  'sn-113': { name: "Small Cake", price: 500, inStock: true },
  'sn-114': { name: "Big Cake", price: 2000, inStock: true },
  'sn-115': { name: "Small Plantain Chips", price: 500, inStock: true },
  'sn-116': { name: "Big Plantain Chips", price: 2000, inStock: true },
  'sn-117': { name: "Small Potato Chips", price: 500, inStock: true },
  'sn-118': { name: "Big Potato Chips", price: 1500, inStock: true },
  'bv-101': { name: "Pepsi", price: 500, inStock: true },
  'bv-102': { name: "Schweppes", price: 500, inStock: true },
  'bv-103': { name: "American Cola", price: 500, inStock: true },
  'bv-104': { name: "Predator Energy", price: 700, inStock: true },
  'bv-105': { name: "Pulpy Juice", price: 800, inStock: true },
  'bv-106': { name: "Pulpy Juice (Big)", price: 1500, inStock: true },
  'bv-107': { name: "Sosa Juice", price: 600, inStock: true },
  'bv-108': { name: "Zobo Drink", price: 850, inStock: true },
  'bv-109': { name: "Fresh Fruit Juice", price: 2700, inStock: true },
  'bv-110': { name: "Fresh Orange Juice", price: 2800, inStock: true },
  'bv-111': { name: "Smoothie", price: 2700, inStock: true },
  'bv-112': { name: "Chivita Exotic (Big)", price: 2500, inStock: true },
  'bv-113': { name: "Guinness (Big)", price: 1500, inStock: true },
  'bv-114': { name: "Smirnoff Ice", price: 1500, inStock: true },
  'bv-115': { name: "Smirnoff Bullet", price: 1500, inStock: true },
  'bv-116': { name: "Hollandia Milk", price: 500, inStock: true },
  'bv-117': { name: "Nescafe", price: 1000, inStock: true },
  'bv-118': { name: "Black Coffee", price: 1000, inStock: true },
  'bv-119': { name: "Hot Chocolate", price: 1000, inStock: true },
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
