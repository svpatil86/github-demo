# GitHub Demo - Full Stack Task Manager

A complete full-stack application built with React, Vite, and Supabase. This project demonstrates authentication, CRUD operations, and modern web development practices.

## Features

- User authentication (sign up, sign in, sign out)
- Task management (create, read, update, delete)
- Row-level security for data protection
- Responsive design with modern UI
- Real-time data synchronization

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling with CSS custom properties

### Backend
- **Supabase** - Backend as a service
  - PostgreSQL database
  - Authentication
  - Row Level Security (RLS)

## Project Structure

```
github-demo/
├── database/
│   ├── migrations/
│   │   ├── 001_create_tasks_table.sql
│   │   └── 002_create_profiles_table.sql
│   ├── seed.sql
│   └── README.md
├── src/
│   ├── components/
│   │   ├── AuthForm.jsx
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── lib/
│   │   ├── api.js
│   │   └── supabase.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd github-demo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Add your Supabase credentials to `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run database migrations:
```bash
# Apply migrations in Supabase SQL editor in order:
# 1. database/migrations/001_create_tasks_table.sql
# 2. database/migrations/002_create_profiles_table.sql
```

6. Start the development server:
```bash
npm run dev
```

### Database Setup

The application uses two main tables:

#### Tasks Table
- `id` - UUID primary key
- `title` - Task title
- `description` - Optional description
- `completed` - Boolean status
- `user_id` - Owner reference
- `created_at` / `updated_at` - Timestamps

#### Profiles Table
- `id` - UUID (references auth.users)
- `username` - Unique username
- `full_name` - Display name
- `avatar_url` - Profile image
- `bio` - User biography

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Security

- Row Level Security (RLS) is enabled on all tables
- Users can only access their own data
- Authentication is handled by Supabase Auth
- Environment variables are never committed to git

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning and development.
