# RedgeFit Admin Panel

A comprehensive admin dashboard for RedgeFit fitness app built with Next.js 15, TypeScript, and shadcn/ui.

## ✅ Features Implemented

### 🔐 Authentication & Security
- Login/logout functionality with protected routes
- Mock authentication system (ready for Firebase integration)
- Route protection with middleware
- Admin session management

### 📊 Dashboard Overview
- **Enhanced Analytics**: Real-time revenue graphs with MRR tracking
- **User Statistics**: Total users, active subscribers, free trial users
- **Trainer Metrics**: Total trainers and approval queue
- **Activity Feed**: Recent user activities and system events
- **System Health**: API, database, and CDN status monitoring

### 👥 User Management
- **Trainee Management**: 
  - Filter by subscription type (Shopify, In-App, Free Trial, Expired)
  - View points balance, current program, subscription status
  - Actions: Reset password, ban user, gift points
  - Version-based filtering and analytics
- **Trainer Management**:
  - Approval queue for new trainer applications
  - Rating system and performance analytics
  - Specialization and session tracking

### 🏋️ Workout Library
- **Video Upload**: Drag-and-drop interface for workout videos
- **Categorization**: By difficulty (Beginner/Intermediate/Advanced) and type
- **Metadata Management**: Duration, instructor, tags, thumbnails
- **Analytics**: Views and completion tracking
- **Content Moderation**: Active/inactive status control

### 📚 Program Management
- **Multi-Video Programs**: Create comprehensive workout programs
- **Thumbnail Management**: Visual program representation
- **Enrollment Analytics**: Track user signups and completion rates
- **Category Organization**: By difficulty and workout type
- **Duration Settings**: Program length and scheduling

### 💳 Subscription Management
- **Multi-Platform Support**: Shopify, In-App, and Free Trial subscriptions
- **Real-time Sync**: Force sync button for immediate updates
- **Revenue Analytics**: Monthly recurring revenue tracking
- **Status Management**: Active, cancelled, expired subscriptions
- **Failed Sync Tracking**: Monitor and handle sync issues

### 🗣️ Community Moderation
- **Report Management**: Review and handle user reports
- **Content Moderation**: View posts and remove inappropriate content
- **Report Categories**: Spam, harassment, inappropriate content
- **Action Queue**: Prioritized review system
- **User Analytics**: Engagement and activity tracking

### 📢 Blast Notifications
- **Targeted Messaging**: Send to all users, trainees, or trainers
- **Template System**: Pre-built notification templates
- **Scheduling**: Send now or schedule for later
- **Analytics**: Open rates and recipient tracking
- **Best Practices**: Built-in guidance for optimal engagement

### ⚙️ Advanced Settings
- **App Version Control**: Minimum supported versions and force updates
- **Security Settings**: 2FA, session timeout, audit logging
- **Notification Preferences**: Push and email configuration
- **User Management Policies**: Trial duration, verification requirements
- **System Configuration**: Timezone, support email, rate limiting

### 🔧 Additional Features
- **Firebase Integration**: Ready for Firestore database
- **Responsive Design**: Mobile-friendly interface
- **TypeScript**: Full type safety
- **Modern UI**: Clean, Firebase Console-inspired design
- **Component Library**: Built with shadcn/ui

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui + Tailwind CSS
- **Charts**: Recharts for analytics
- **Icons**: Lucide React
- **Database**: Firebase SDK (ready for integration)
- **State Management**: React Context
- **Authentication**: Firebase Auth (configured)

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Update `src/lib/firebase.ts` with your Firebase credentials
   - Set up Firestore database collections

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Authentication

The app includes mock authentication for demo purposes:
- Use any email and password to login
- User data is stored in localStorage
- Protected routes redirect to login page
- Ready for Firebase Auth integration

## 📁 Project Structure

```
src/
├── app/                           # Next.js app directory
│   ├── dashboard/                 # Protected dashboard pages
│   │   ├── users/                # Trainee management
│   │   ├── trainers/             # Trainer management
│   │   ├── workouts/             # Workout library
│   │   ├── programs/             # Program management
│   │   ├── subscriptions/        # Subscription management
│   │   ├── community/            # Community moderation
│   │   ├── notifications/        # Blast notifications
│   │   └── settings/            # App settings
│   ├── login/                   # Login page
│   └── layout.tsx               # Root layout
├── components/
│   ├── auth/                    # Authentication components
│   ├── dashboard/               # Dashboard components
│   ├── layout/                  # Layout components
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── firebase.ts              # Firebase configuration
│   └── utils.ts                # Utility functions
├── middleware.ts               # Route protection
└── types/                     # TypeScript definitions
```

## 🎨 Features Ready for Implementation

The following pages are structured and ready for full implementation:
- **Nutrition Management**: Meal plans and nutrition tracking
- **Avatar Frames & Assets**: Customizable user avatars with points pricing
- **Livestream Management**: Stream scheduling and rating logs
- **FAQ Management**: Trainee and trainer frequently asked questions
- **Reward Club**: Points system and achievement tracking
- **Release Tasks**: Development task management
- **Admin Logs**: Comprehensive activity logging

## 🔧 Customization

- **Colors & Theme**: Update in `src/app/globals.css`
- **Navigation**: Customize in `src/components/layout/app-sidebar.tsx`
- **Authentication**: Modify in `src/components/auth/auth-provider.tsx`
- **API Integration**: Replace mock data with Firebase calls
- **Add Pages**: Create new routes in `src/app/dashboard/`

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

The application is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Next.js compatible hosting platform

## 🔮 Future Enhancements

- **Video Processing**: Integration with Mux or Cloudinary for video optimization
- **Real-time Updates**: WebSocket integration for live data
- **Advanced Analytics**: Custom report builder
- **API Rate Limiting**: Enhanced security features
- **Multi-language Support**: Internationalization

## 📞 Support

This admin panel provides a complete foundation for managing your RedgeFit fitness application with all essential features for user management, content moderation, subscription handling, and comprehensive analytics.
