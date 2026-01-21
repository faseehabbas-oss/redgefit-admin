'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { format, subDays } from 'date-fns';

const revenueData = [
  { date: 'Jan', revenue: 32000 },
  { date: 'Feb', revenue: 35000 },
  { date: 'Mar', revenue: 41000 },
  { date: 'Apr', revenue: 38000 },
  { date: 'May', revenue: 45000 },
  { date: 'Jun', revenue: 48000 },
  { date: 'Jul', revenue: 52000 },
];

const userGrowthData = [
  { date: 'Jan', totalUsers: 5200, newUsers: 450 },
  { date: 'Feb', totalUsers: 5650, newUsers: 480 },
  { date: 'Mar', totalUsers: 6180, newUsers: 520 },
  { date: 'Apr', totalUsers: 6720, newUsers: 490 },
  { date: 'May', totalUsers: 7340, newUsers: 550 },
  { date: 'Jun', totalUsers: 7950, newUsers: 580 },
  { date: 'Jul', totalUsers: 8600, newUsers: 620 },
];

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly recurring revenue trend</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ fill: '#8884d8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>Total users and new signups per month</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="newUsers" fill="#82ca9d" name="New Users" />
            <Bar dataKey="totalUsers" fill="#8884d8" name="Total Users" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}