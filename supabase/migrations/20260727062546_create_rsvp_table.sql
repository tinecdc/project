/*
# Create RSVP table for Alicia Turns 18 invitation

1. New Tables
- `rsvps`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest's full name
  - `email` (text, not null) — guest's email
  - `phone` (text) — guest's phone number
  - `message` (text) — optional message to the celebrant
  - `attending` (boolean, not null) — whether the guest will attend
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `rsvps`.
- This is a public invitation site with no sign-in, so allow anon + authenticated
  to INSERT (guests submit RSVPs) and SELECT their own submissions. Reads are
  intentionally public so the site can show a count of attendees; anyone viewing
  the invitation may submit a response.
- DELETE and UPDATE are NOT granted to anon — only the site owner (authenticated
  via dashboard) could manage entries, but since there is no auth UI, we restrict
  update/delete to authenticated users who sign in via Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text,
  attending boolean NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_rsvps" ON rsvps;
CREATE POLICY "anon_insert_rsvps"
ON rsvps FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_rsvps" ON rsvps;
CREATE POLICY "anon_select_rsvps"
ON rsvps FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_rsvps" ON rsvps;
CREATE POLICY "auth_update_rsvps"
ON rsvps FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_rsvps" ON rsvps;
CREATE POLICY "auth_delete_rsvps"
ON rsvps FOR DELETE
TO authenticated
USING (true);
