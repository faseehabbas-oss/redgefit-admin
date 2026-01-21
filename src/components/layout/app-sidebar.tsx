'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/components/auth/auth-provider';
import { SidebarItem } from '@/types';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Package,
  LogOut,
  User,
  Dumbbell,
  BookOpen,
  Apple,
  Image,
  MessageSquare,
  Video,
  CreditCard,
  HelpCircle,
  Bell,
  Trophy,
  Smartphone,
  CheckSquare,
  FileText,
  UserCheck
} from 'lucide-react';

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { title: 'Users', icon: Users, href: '/dashboard/users' },
  { title: 'Trainers', icon: UserCheck, href: '/dashboard/trainers' },
  { title: 'Workout Library', icon: Dumbbell, href: '/dashboard/workouts' },
  { title: 'Programs', icon: BookOpen, href: '/dashboard/programs' },
  { title: 'Nutrition', icon: Apple, href: '/dashboard/nutrition' },
  { title: 'Avatar Frames', icon: Image, href: '/dashboard/avatars' },
  { title: 'Community', icon: MessageSquare, href: '/dashboard/community' },
  { title: 'Livestream', icon: Video, href: '/dashboard/livestream' },
  { title: 'Subscriptions', icon: CreditCard, href: '/dashboard/subscriptions' },
  { title: 'FAQs', icon: HelpCircle, href: '/dashboard/faqs' },
  { title: 'Notifications', icon: Bell, href: '/dashboard/notifications' },
  { title: 'Reward Club', icon: Trophy, href: '/dashboard/rewards' },
  { title: 'App Version', icon: Smartphone, href: '/dashboard/app-version' },
  { title: 'Release Tasks', icon: CheckSquare, href: '/dashboard/release-tasks' },
  { title: 'Admin Logs', icon: FileText, href: '/dashboard/admin-logs' },
  { title: 'Settings', icon: Settings, href: '/dashboard/settings' },
];

export function AppSidebar() {
  const { user, logout } = useAuth();

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">RF</span>
          </div>
          <span className="text-lg font-semibold">RedgeFit</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <a href={item.href} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="border-t">
        <div className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3 cursor-pointer rounded-lg hover:bg-accent p-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{user?.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}