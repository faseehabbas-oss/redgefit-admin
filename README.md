# RedgeFit Admin Panel

A modern admin dashboard for RedgeFit built with Next.js 15, TypeScript, and shadcn/ui.

## Features

- 🔐 **Authentication** - Login/logout functionality with protected routes
- 📊 **Dashboard** - Overview with stats and activity feed
- 👥 **User Management** - Manage users (placeholder)
- 📈 **Analytics** - View analytics and insights (placeholder)
- 📦 **Product Management** - Manage products (placeholder)
- ⚙️ **Settings** - Application and account settings
- 🎨 **Modern UI** - Built with shadcn/ui components
- 📱 **Responsive** - Mobile-friendly design
- 🌙 **Dark Mode** - Built-in dark theme support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui + Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context (Auth)
- **Styling**: Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication

The app includes mock authentication for demo purposes:
- Use any email and password to login
- User data is stored in localStorage
- Protected routes redirect to login page

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Protected dashboard pages
│   ├── login/            # Login page
│   └── layout.tsx        # Root layout
├── components/
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── layout/           # Layout components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities
├── middleware.ts         # Route protection
└── types/                # TypeScript definitions
```

## Customization

- Update colors and theme in `src/app/globals.css`
- Add new pages in `src/app/dashboard/`
- Customize sidebar navigation in `src/components/layout/app-sidebar.tsx`
- Modify authentication logic in `src/components/auth/auth-provider.tsx`

## Build

```bash
npm run build
```

## Deploy

Ready to deploy to Vercel, Netlify, or any Next.js hosting platform.
# redgefit-admin
