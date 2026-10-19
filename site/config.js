// TradeSmart backend settings. Both values come from Supabase > Project Settings > API.
// They are public by design: the anon key can only do what supabase/schema.sql allows
// (add new sign-ups, never read them). Leave blank until the project exists; sign-ups
// wait on each visitor's device and send automatically once these are filled in.
window.TS_CONFIG = {
  supabaseUrl: 'https://potlgagwfdzyjwcyauhn.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvdGxnYWd3ZmR6eWp3Y3lhdWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNDk5NDUsImV4cCI6MjA5NDcyNTk0NX0.o7MWFvJNrKgY-go-lHdZPQlqm37S2wEF_b7IBoGbil0'
};
