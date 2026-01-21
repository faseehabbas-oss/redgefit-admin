export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'superadmin' | 'trainer' | 'trainee';
  avatar?: string;
  createdAt?: Date;
  lastActive?: Date;
  subscriptionStatus?: 'free_trial' | 'active' | 'expired' | 'shopify';
  appVersion?: string;
  points?: number;
  programId?: string;
  trainerId?: string;
  isBanned?: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface Trainee extends User {
  role: 'trainee';
  subscriptionType?: 'free_trial' | 'shopify' | 'in_app' | 'full_access';
  currentProgram?: string;
  pointsBalance: number;
  trialExpiry?: Date;
}

export interface Trainer extends User {
  role: 'trainer';
  isApproved?: boolean;
  rating?: number;
  totalSessions?: number;
  specializations?: string[];
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  instructor: string;
  createdAt: Date;
  isActive: boolean;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  videos: string[]; // workout IDs
  duration: number; // in days
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  thumbnailUrl?: string;
  isActive: boolean;
  createdAt: Date;
}

export interface NutritionPlan {
  id: string;
  name: string;
  description: string;
  meals: Meal[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  isActive: boolean;
  createdAt: Date;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  imageUrl?: string;
}

export interface AvatarFrame {
  id: string;
  name: string;
  imageUrl: string;
  price: number; // in points
  isActive: boolean;
  createdAt: Date;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  imageUrl?: string;
  createdAt: Date;
  likes: number;
  comments: number;
  isReported: boolean;
  isDeleted: boolean;
}

export interface Livestream {
  id: string;
  title: string;
  description: string;
  trainerId: string;
  trainerName: string;
  scheduledAt: Date;
  duration: number;
  isLive: boolean;
  viewerCount: number;
  rating?: number;
  ratingCount: number;
  videoUrl?: string;
}

export interface Subscription {
  id: string;
  userId: string;
  type: 'shopify' | 'in_app' | 'free_trial';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
  amount?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'trainee' | 'trainer';
  isActive: boolean;
  order: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  targetAudience: 'all' | 'trainees' | 'trainers';
  scheduledAt?: Date;
  isSent: boolean;
  createdAt: Date;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  type: 'achievement' | 'redeemable';
  imageUrl?: string;
  isActive: boolean;
}

export interface Achievement {
  id: string;
  userId: string;
  rewardId: string;
  earnedAt: Date;
  points: number;
}

export interface AppVersion {
  id: string;
  platform: 'ios' | 'android';
  version: string;
  isMandatory: boolean;
  releaseNotes: string;
  releasedAt: Date;
}

export interface ReleaseTask {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'approved';
  assignedTo?: string;
  createdAt: Date;
  dueDate?: Date;
}

export interface AdminLog {
  id: string;
  adminId: string;
  adminName: string;
  action: string;
  resource: string;
  resourceId: string;
  timestamp: Date;
  ipAddress?: string;
  userAgent?: string;
}

export interface DashboardStats {
  totalRevenue: number;
  monthlyRevenue: number;
  totalUsers: number;
  activeSubscribers: number;
  freeTrialUsers: number;
  totalTrainers: number;
  dailyRegistrations: number;
  recentActivity: Activity[];
}

export interface Activity {
  id: string;
  type: 'user_signup' | 'subscription' | 'workout_completed' | 'trainer_approved';
  description: string;
  userId?: string;
  userName?: string;
  timestamp: Date;
}

export interface SidebarItem {
  title: string;
  icon: any; // LucideIcon
  href: string;
  isActive?: boolean;
  badge?: number;
}