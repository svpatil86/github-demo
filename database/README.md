# Database Scripts

This directory contains all database-related scripts for the GitHub Demo project.

## Directory Structure

```
database/
├── migrations/          # Database migration files
│   ├── 001_create_tasks_table.sql
│   └── 002_create_profiles_table.sql
├── seed.sql            # Seed data for development
└── README.md           # This file
```

## Migrations

Migrations are numbered sequentially and should be applied in order:

1. `001_create_tasks_table.sql` - Creates the tasks table with RLS policies
2. `002_create_profiles_table.sql` - Creates user profiles table

## Row Level Security (RLS)

All tables have RLS enabled. Users can only:
- View and modify their own tasks
- View all profiles, but only modify their own

## How to Run Migrations

Using Supabase CLI:
```bash
supabase db push
```

Or apply directly via Supabase dashboard SQL editor.

## Schema Overview

### Tasks Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| title | VARCHAR(255) | Task title |
| description | TEXT | Task description |
| completed | BOOLEAN | Completion status |
| user_id | UUID | Owner's user ID |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### Profiles Table
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (references auth.users) |
| username | VARCHAR(50) | Unique username |
| full_name | VARCHAR(100) | Display name |
| avatar_url | TEXT | Profile image URL |
| bio | TEXT | User biography |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |
