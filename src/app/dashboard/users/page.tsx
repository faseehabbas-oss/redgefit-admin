'use client';

import { useState } from 'react';
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, MoreHorizontal, Gift, Ban, RotateCcw } from 'lucide-react';

// Mock data
const mockTrainees = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subscriptionStatus: 'active',
    subscriptionType: 'shopify',
    points: 1250,
    currentProgram: '30-Day Challenge',
    appVersion: '2.1.0',
    joinedDate: '2024-01-15',
    lastActive: '2024-01-22',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    subscriptionStatus: 'free_trial',
    subscriptionType: 'free_trial',
    points: 450,
    currentProgram: 'Beginner Program',
    appVersion: '2.0.8',
    joinedDate: '2024-01-10',
    lastActive: '2024-01-21',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    subscriptionStatus: 'expired',
    subscriptionType: 'in_app',
    points: 890,
    currentProgram: 'None',
    appVersion: '1.9.5',
    joinedDate: '2023-12-01',
    lastActive: '2024-01-20',
  },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subscriptionFilter, setSubscriptionFilter] = useState<string>('all');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const filteredUsers = mockTrainees.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubscription = subscriptionFilter === 'all' || user.subscriptionType === subscriptionFilter;
    return matchesSearch && matchesSubscription;
  });

  const getSubscriptionBadge = (status: string, type: string) => {
    if (status === 'active') {
      return <Badge className="bg-green-500">{type === 'shopify' ? 'Shopify' : 'In-App'}</Badge>;
    } else if (status === 'free_trial') {
      return <Badge className="bg-blue-500">Free Trial</Badge>;
    } else {
      return <Badge variant="secondary">Expired</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trainee Management</h1>
            <p className="text-muted-foreground">
              Manage app users, subscriptions, and support
            </p>
          </div>
          <Button>Export Data</Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Active Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3,456</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Free Trial Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Expired Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">892</div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>User List</CardTitle>
            <CardDescription>
              Manage trainee accounts and subscriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={subscriptionFilter} onValueChange={setSubscriptionFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="shopify">Shopify</SelectItem>
                  <SelectItem value="in_app">In-App</SelectItem>
                  <SelectItem value="free_trial">Free Trial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Subscription</TableHead>
                  <TableHead>Points</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>App Version</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getSubscriptionBadge(user.subscriptionStatus, user.subscriptionType)}
                    </TableCell>
                    <TableCell>{user.points.toLocaleString()}</TableCell>
                    <TableCell>{user.currentProgram}</TableCell>
                    <TableCell>{user.appVersion}</TableCell>
                    <TableCell>{user.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedUser(user)}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>User Actions</DialogTitle>
              <DialogDescription>
                Manage user: {selectedUser?.name}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Current Points</Label>
                  <p className="text-2xl font-bold">{selectedUser?.points}</p>
                </div>
                <div>
                  <Label>Subscription</Label>
                  <p>{getSubscriptionBadge(selectedUser?.subscriptionStatus, selectedUser?.subscriptionType)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  Gift Points
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Reset Password
                </Button>
              </div>
              
              <Button variant="destructive" className="flex items-center gap-2">
                <Ban className="h-4 w-4" />
                Ban User
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}