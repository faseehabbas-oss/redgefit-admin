'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, UserCheck, CreditCard, DollarSign, TrendingUp } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,563',
      description: '+23% from last month',
      icon: DollarSign,
      trend: 'up'
    },
    {
      title: 'MRR',
      value: '$45,231',
      description: '+18% from last month',
      icon: TrendingUp,
      trend: 'up'
    },
    {
      title: 'Total Users',
      value: '8,234',
      description: '+12% from last month',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Active Subscribers',
      value: '3,456',
      description: '+8% from last month',
      icon: CreditCard,
      trend: 'up'
    },
    {
      title: 'Free Trial Users',
      value: '1,234',
      description: '-5% from last month',
      icon: BarChart3,
      trend: 'down'
    },
    {
      title: 'Total Trainers',
      value: '89',
      description: '+2 new this week',
      icon: UserCheck,
      trend: 'up'
    },
    {
      title: 'Daily Registrations',
      value: '47',
      description: 'Today so far',
      icon: Users,
      trend: 'neutral'
    },
    {
      title: 'Completion Rate',
      value: '68%',
      description: '+3% from last week',
      icon: TrendingUp,
      trend: 'up'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${
              stat.trend === 'up' ? 'text-green-600' : 
              stat.trend === 'down' ? 'text-red-600' : 
              'text-muted-foreground'
            }`}>
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}