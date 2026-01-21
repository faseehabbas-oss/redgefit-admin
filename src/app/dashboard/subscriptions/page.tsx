'use client';

import { useState } from 'react';
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search, RefreshCcw, CreditCard, Users, TrendingUp, Calendar, DollarSign } from 'lucide-react';

// Mock data
const mockSubscriptions = [
  {
    id: '1',
    userId: 'user_1',
    userName: 'John Doe',
    email: 'john@example.com',
    type: 'shopify',
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-02-01',
    amount: 29.99,
    lastSync: '2024-01-22 10:30',
  },
  {
    id: '2',
    userId: 'user_2',
    userName: 'Jane Smith',
    email: 'jane@example.com',
    type: 'in_app',
    status: 'active',
    startDate: '2024-01-15',
    endDate: null,
    amount: 19.99,
    lastSync: '2024-01-22 09:15',
  },
  {
    id: '3',
    userId: 'user_3',
    userName: 'Mike Johnson',
    email: 'mike@example.com',
    type: 'free_trial',
    status: 'active',
    startDate: '2024-01-20',
    endDate: '2024-02-04',
    amount: 0,
    lastSync: '2024-01-22 11:00',
  },
  {
    id: '4',
    userId: 'user_4',
    userName: 'Emma Davis',
    email: 'emma@example.com',
    type: 'shopify',
    status: 'cancelled',
    startDate: '2023-12-01',
    endDate: '2024-01-01',
    amount: 29.99,
    lastSync: '2024-01-01 23:59',
  },
  {
    id: '5',
    userId: 'user_5',
    userName: 'Alex Thompson',
    email: 'alex@example.com',
    type: 'in_app',
    status: 'expired',
    startDate: '2023-11-15',
    endDate: '2023-12-15',
    amount: 19.99,
    lastSync: '2023-12-15 12:00',
  },
];

const subscriptionTypes = ['All', 'Shopify', 'In-App', 'Free Trial'];
const subscriptionStatuses = ['All', 'Active', 'Cancelled', 'Expired'];

export default function SubscriptionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isSyncing, setIsSyncing] = useState(false);

  const filteredSubscriptions = mockSubscriptions.filter(sub => {
    const matchesSearch = sub.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sub.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || sub.type === typeFilter.toLowerCase().replace('_', '_');
    const matchesStatus = statusFilter === 'all' || sub.status === statusFilter.toLowerCase();
    return matchesSearch && matchesType && matchesStatus;
  });

  const getSubscriptionTypeBadge = (type: string) => {
    const colors = {
      shopify: 'bg-purple-500',
      in_app: 'bg-blue-500',
      free_trial: 'bg-green-500',
    };
    return <Badge className={colors[type as keyof typeof colors]}>
      {type === 'in_app' ? 'In-App' : type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ')}
    </Badge>;
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-500',
      cancelled: 'bg-yellow-500',
      expired: 'bg-red-500',
    };
    return <Badge className={colors[status as keyof typeof colors]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>;
  };

  const handleSync = async () => {
    setIsSyncing(true);
    // Simulate sync process
    setTimeout(() => {
      setIsSyncing(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Subscription Management</h1>
            <p className="text-muted-foreground">
              Manage user subscriptions and Shopify synchronization
            </p>
          </div>
          <Button onClick={handleSync} disabled={isSyncing} className="flex items-center gap-2">
            <RefreshCcw className={`h-4 w-4 ${isSyncing ? 'animate-spin' : ''}`} />
            {isSyncing ? 'Syncing...' : 'Force Sync All'}
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,567</div>
              <p className="text-xs text-muted-foreground">+234 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Active Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3,456</div>
              <p className="text-xs text-muted-foreground">75.6% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">$89,234</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Free Trial Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">1,234</div>
              <p className="text-xs text-muted-foreground">27% of total</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Subscription Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Shopify</span>
                </div>
                <span className="font-medium">1,823</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">In-App</span>
                </div>
                <span className="font-medium">1,510</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Free Trial</span>
                </div>
                <span className="font-medium">1,234</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Revenue Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Shopify Revenue</span>
                <span className="font-medium">$54,690</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">In-App Revenue</span>
                <span className="font-medium">$30,180</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Lost Revenue (Expired)</span>
                <span className="font-medium text-red-600">$4,364</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Sync Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Sync</span>
                <span className="font-medium">2 min ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sync Success Rate</span>
                <span className="font-medium text-green-600">99.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Failed Syncs</span>
                <span className="font-medium text-red-600">3</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Subscription List</CardTitle>
            <CardDescription>
              View and manage all user subscriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search subscriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {subscriptionTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(' ', '_')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {subscriptionStatuses.map((status) => (
                    <SelectItem key={status} value={status.toLowerCase()}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Last Sync</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubscriptions.map((subscription) => (
                  <TableRow key={subscription.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{subscription.userName}</div>
                        <div className="text-sm text-muted-foreground">{subscription.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getSubscriptionTypeBadge(subscription.type)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(subscription.status)}
                    </TableCell>
                    <TableCell>
                      {subscription.amount > 0 ? `$${subscription.amount}` : 'Free'}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {subscription.startDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      {subscription.endDate || 'Ongoing'}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {subscription.lastSync}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Sync Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}