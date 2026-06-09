import { X, Plus, Minus, ShoppingBag, Trash2, Loader2, Banknote, Wallet, Copy, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

type PaymentMethod = 'cash' | 'bank_transfer';

const BANK_DETAILS = {
  accountName: 'ERIDAN CITY LTD - METROMUNCH 1',
  accountNumber: '5255813712',
  bank: 'Moniepoint Microfinance Bank',
};
const WHATSAPP_URL = 'https://wa.me/2349023182683';

const CartSidebar = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');
  const [bankOrder, setBankOrder] = useState<{ id: string; total: number } | null>(null);
  const [copied, setCopied] = useState(false);

  const handlePlaceOrder = async () => {
    // Check if user is authenticated
    if (!user) {
      setIsCartOpen(false);
      toast({
        title: 'Please sign in',
        description: 'You need to be signed in to place an order.',
      });
      navigate('/login');
      return;
    }

    setIsPlacingOrder(true);

    try {
      // Get current session for auth token
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: 'Session expired',
          description: 'Please sign in again to place your order.',
          variant: 'destructive',
        });
        navigate('/login');
        return;
      }

      // Prepare order items - only send product_id and quantity
      // Price will be validated server-side
      const orderItems = items.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
      }));

      const methodLabel = paymentMethod === 'bank_transfer' ? 'Bank Transfer' : 'Cash on Delivery';

      // Call the edge function
      const response = await supabase.functions.invoke('create-order', {
        body: {
          items: orderItems,
          delivery_address: profile?.delivery_address || undefined,
          notes: `Payment method: ${methodLabel}`,
        },
      });

      if (response.error) {
        throw new Error(response.error.message || 'Failed to place order');
      }

      if (!response.data?.success) {
        throw new Error(response.data?.error || 'Failed to place order');
      }

      const order = response.data.order;

      if (paymentMethod === 'bank_transfer') {
        // Keep the sidebar open and show the bank-transfer instructions.
        setBankOrder({ id: order.id, total: order.total_price });
        clearCart();
      } else {
        clearCart();
        setIsCartOpen(false);
        toast({
          title: 'Order placed successfully!',
          description: `Order total: ${formatPrice(order.total_price)}`,
        });
      }

    } catch (error) {
      console.error('Error placing order:', error);
      toast({
        title: 'Failed to place order',
        description: error instanceof Error ? error.message : 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsPlacingOrder(false);
    }
  };

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
      setCopied(true);
      toast({ title: 'Account number copied' });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast({ title: 'Could not copy', variant: 'destructive' });
    }
  };

  const closeBankConfirmation = () => {
    setBankOrder(null);
    setPaymentMethod('cash');
    setIsCartOpen(false);
  };

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  // Bank-transfer instructions panel (shown after a Bank Transfer order is placed)
  if (bankOrder) {
    const orderShort = bankOrder.id.slice(0, 8).toUpperCase();
    const waMessage = encodeURIComponent(
      `Hi Metro Munch, I just placed order #${orderShort} for ${formatPrice(bankOrder.total)} and I'd like to send my bank transfer proof.`
    );
    return (
      <>
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50" onClick={closeBankConfirmation} />
        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 animate-slide-in-right overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Complete Payment</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={closeBankConfirmation}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-5 space-y-5">
            <div className="rounded-xl bg-primary/10 border border-primary/20 p-4">
              <p className="text-xs text-muted-foreground">Order reference</p>
              <p className="font-display text-lg font-bold text-primary">#{orderShort}</p>
              <p className="text-xs text-muted-foreground mt-2">Amount to transfer</p>
              <p className="font-display text-2xl font-bold">{formatPrice(bankOrder.total)}</p>
            </div>
            <div className="rounded-xl border border-border p-4 space-y-3">
              <h3 className="font-semibold text-sm text-foreground">Transfer to:</h3>
              <div>
                <p className="text-xs text-muted-foreground">Bank</p>
                <p className="font-medium">{BANK_DETAILS.bank}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Account name</p>
                <p className="font-medium">{BANK_DETAILS.accountName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Account number</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-lg font-bold text-primary">{BANK_DETAILS.accountNumber}</p>
                  <Button variant="outline" size="sm" onClick={copyAccountNumber}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-muted/40 p-4 text-sm space-y-2">
              <p className="font-medium">After transferring:</p>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Take a screenshot of your payment receipt.</li>
                <li>Send it to us on WhatsApp with your order reference.</li>
                <li>We'll confirm and start preparing your order.</li>
              </ol>
            </div>
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href={`${WHATSAPP_URL}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Send Proof on WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="w-full" onClick={closeBankConfirmation}>
              I'll send it later
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="font-display text-lg font-semibold">Your Order</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setIsCartOpen(false)}
                >
                  Browse Menu
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-lg bg-card card-shadow animate-fade-in"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-border space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display text-xl font-semibold">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              {/* Payment method */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Payment method</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors ${
                      paymentMethod === 'cash'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    <Wallet className="h-4 w-4" />
                    Cash
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    <Banknote className="h-4 w-4" />
                    Bank Transfer
                  </button>
                </div>
              </div>
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handlePlaceOrder}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  paymentMethod === 'bank_transfer' ? 'Continue to Bank Transfer' : 'Place Order'
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-muted-foreground"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;