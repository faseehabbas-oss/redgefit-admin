'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, CreditCard, Dumbbell, UserCheck, MessageSquare, TrendingUp } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      user: 'Sarah Johnson',
      action: 'completed workout program',
      time: '2 minutes ago',
      type: 'workout',
      icon: Dumbbell
    },
    {
      user: 'Mike Williams',
      action: 'started premium subscription',
      time: '5 minutes ago',
      type: 'subscription',
      icon: CreditCard
    },
    {
      user: 'Emma Davis',
      action: 'joined as a new user',
      time: '10 minutes ago',
      type: 'signup',
      icon: User
    },
    {
      user: 'Alex Thompson',
      action: 'applied to become trainer',
      time: '15 minutes ago',
      type: 'trainer',
      icon: UserCheck
    },
    {
      user: 'Lisa Chen',
      action: 'reported community post',
      time: '20 minutes ago',
      type: 'community',
      icon: MessageSquare
    },
    {
      user: 'John Martinez',
      action: 'achieved new milestone',
      time: '30 minutes ago',
      type: 'achievement',
      icon: TrendingUp
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'workout': return 'text-green-500';
      case 'subscription': return 'text-blue-500';
      case 'signup': return 'text-purple-500';
      case 'trainer': return 'text-orange-500';
      case 'community': return 'text-red-500';
      case 'achievement': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user activities and system events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <activity.icon className={`h-4 w-4 ${getIconColor(activity.type)}`} />
              <div className="flex-1 space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>{' '}
                  {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}