// Supabase Configuration
const SUPABASE_CONFIG = {
    url: 'https://wqbppfagtznqsuspptdz.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxYnBwZmFndHpucXN1c3BwdGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxMzQ4MTgsImV4cCI6MjA4MDcxMDgxOH0.8tHjO7BxGtWBvmaqFFv9W_9tp-BvE8CPC2XSxu5M5Vc'
};

// Initialize Supabase client (will be used by admin and card pages)
const supabase = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
