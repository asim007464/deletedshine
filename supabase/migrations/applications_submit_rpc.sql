-- =============================================================================
-- Fix RLS block: insert application via RPC (SECURITY DEFINER bypasses RLS).
-- Run this in Supabase Dashboard → SQL Editor.
-- =============================================================================

CREATE OR REPLACE FUNCTION public.submit_application(
  p_form_data JSONB,
  p_user_id UUID DEFAULT NULL,
  p_status TEXT DEFAULT 'pending'
)
RETURNS TABLE (id UUID, status TEXT, created_at TIMESTAMPTZ)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_id UUID;
  v_status TEXT;
  v_created_at TIMESTAMPTZ;
BEGIN
  INSERT INTO public.applications (form_data, user_id, status)
  VALUES (p_form_data, p_user_id, p_status)
  RETURNING applications.id, applications.status, applications.created_at
  INTO v_id, v_status, v_created_at;

  id := v_id;
  status := v_status;
  created_at := v_created_at;
  RETURN NEXT;
END;
$$;

-- Let anon and authenticated call this function
GRANT EXECUTE ON FUNCTION public.submit_application(JSONB, UUID, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION public.submit_application(JSONB, UUID, TEXT) TO authenticated;
