-- =============================================================================
-- Fix: "new row violates row-level security policy for table applications"
-- Run this in Supabase Dashboard → SQL Editor.
-- This ensures anyone (logged in or not) can INSERT into applications.
-- =============================================================================

-- 1. Grant table-level INSERT so anon and authenticated roles can insert
GRANT INSERT ON public.applications TO anon;
GRANT INSERT ON public.applications TO authenticated;
GRANT SELECT ON public.applications TO anon;
GRANT SELECT ON public.applications TO authenticated;

-- 2. Drop any existing insert policy and create explicit ones per role
DROP POLICY IF EXISTS "Anyone can insert application" ON public.applications;
DROP POLICY IF EXISTS "Allow anon to insert application" ON public.applications;
DROP POLICY IF EXISTS "Allow authenticated to insert application" ON public.applications;

CREATE POLICY "Allow anon to insert application"
ON public.applications FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "Allow authenticated to insert application"
ON public.applications FOR INSERT TO authenticated
WITH CHECK (true);

-- 3. Ensure admin can update applications (approve/reject)
DROP POLICY IF EXISTS "Admin can update applications" ON public.applications;
CREATE POLICY "Admin can update applications"
ON public.applications
FOR UPDATE
TO authenticated
USING (public.get_my_profile_role() = 'admin')
WITH CHECK (true);
