GRANT EXECUTE ON FUNCTION public.is_order_owner(uuid) TO authenticated;
REVOKE EXECUTE ON FUNCTION public.is_order_owner(uuid) FROM anon;
REVOKE EXECUTE ON FUNCTION public.is_order_owner(uuid) FROM PUBLIC;