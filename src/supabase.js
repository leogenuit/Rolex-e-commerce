import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yzdcayhxvxrbblpvebfs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6ZGNheWh4dnhyYmJscHZlYmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MDExMzgsImV4cCI6MjA0Mzk3NzEzOH0.-70irA4caUzojTT-uXC42fzcpWI9nAZ9_maOHdepV94"
);
