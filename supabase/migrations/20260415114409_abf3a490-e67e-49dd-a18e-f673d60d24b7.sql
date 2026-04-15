-- Prevent users from tampering with total_price or status via direct UPDATE
CREATE OR REPLACE FUNCTION public.protect_order_fields()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
BEGIN
  -- Only allow changes to delivery_address and notes
  -- Reject changes to total_price, status, user_id
  IF NEW.total_price IS DISTINCT FROM OLD.total_price THEN
    RAISE EXCEPTION 'Cannot modify order total_price';
  END IF;
  IF NEW.status IS DISTINCT FROM OLD.status THEN
    RAISE EXCEPTION 'Cannot modify order status';
  END IF;
  IF NEW.user_id IS DISTINCT FROM OLD.user_id THEN
    RAISE EXCEPTION 'Cannot modify order owner';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER protect_order_fields_trigger
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_order_fields();