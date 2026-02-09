-- Add UPDATE policy for orders table
-- Allows users to update only their own pending orders
CREATE POLICY "Users can update their pending orders"
  ON public.orders FOR UPDATE
  USING (user_id = auth.uid() AND status = 'pending')
  WITH CHECK (user_id = auth.uid() AND status = 'pending');