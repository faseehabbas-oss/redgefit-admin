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
import { Textarea } from "@/components/ui/textarea";
import { Search, Plus, Send, Users, Megaphone, Calendar, Clock, CheckCircle } from 'lucide-react';

// Mock data
const mockNotifications = [
  {
    id: '1',
    title: 'New Challenge Started!',
    message: 'Join our 30-day fitness challenge and transform your body.',
    targetAudience: 'all',
    scheduledAt: '2024-01-23 09:00',
    isSent: true,
    sentAt: '2024-01-23 09:01',
    recipients: 8234,
    openRate: 67.5,
    createdAt: '2024-01-22 16:30',
  },
  {
    id: '2',
    title: 'App Maintenance Notice',
    message: 'The app will be under maintenance for scheduled updates.',
    targetAudience: 'all',
    scheduledAt: '2024-01-25 22:00',
    isSent: false,
    recipients: 0,
    createdAt: '2024-01-22 14:00',
  },
  {
    id: '3',
    title: 'New Workout Program Available',
    message: 'Check out our new HIIT program designed for advanced users.',
    targetAudience: 'trainees',
    scheduledAt: '2024-01-21 18:00',
    isSent: true,
    sentAt: '2024-01-21 18:01',
    recipients: 5678,
    openRate: 45.2,
    createdAt: '2024-01-21 15:45',
  },
];

const audienceTypes = ['All Users', 'Trainees', 'Trainers'];

export default function NotificationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<any>(null);

  const filteredNotifications = mockNotifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'sent' && notification.isSent) ||
                         (statusFilter === 'scheduled' && !notification.isSent);
    return matchesSearch && matchesStatus;
  });

  const getAudienceBadge = (audience: string) => {
    const colors = {
      all: 'bg-blue-500',
      trainees: 'bg-green-500',
      trainers: 'bg-purple-500',
    };
    return <Badge className={colors[audience as keyof typeof colors]}>
      {audience === 'all' ? 'All Users' : audience.charAt(0).toUpperCase() + audience.slice(1)}
    </Badge>;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blast Notifications</h1>
            <p className="text-muted-foreground">
              Send push notifications to all app users
            </p>
          </div>
          <Button onClick={() => setShowCreateDialog(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Notification
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Sent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">8,234</div>
              <p className="text-xs text-muted-foreground">Reachable now</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Avg Open Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">52.3%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Scheduled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-muted-foreground">Pending sends</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => setShowCreateDialog(true)}
              >
                <Megaphone className="h-4 w-4 mr-2" />
                New Challenge Announcement
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => setShowCreateDialog(true)}
              >
                <Users className="h-4 w-4 mr-2" />
                Feature Update
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => setShowCreateDialog(true)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Event Reminder
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => setShowCreateDialog(true)}
              >
                <Clock className="h-4 w-4 mr-2" />
                Maintenance Notice
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Clear Subject:</strong> Keep titles under 50 characters
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Personalization:</strong> Use user names when possible
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Timing:</strong> Send during peak hours (9AM-8PM)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <strong>Frequency:</strong> Limit to 1-2 notifications per day
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Notification History</CardTitle>
            <CardDescription>
              View all sent and scheduled notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Notification</TableHead>
                  <TableHead>Audience</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Open Rate</TableHead>
                  <TableHead>Scheduled</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNotifications.map((notification) => (
                  <TableRow key={notification.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{notification.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {notification.message}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getAudienceBadge(notification.targetAudience)}
                    </TableCell>
                    <TableCell>
                      {notification.isSent ? (
                        <Badge className="bg-green-500">Sent</Badge>
                      ) : (
                        <Badge className="bg-orange-500">Scheduled</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {notification.recipients > 0 ? (
                        notification.recipients.toLocaleString()
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {notification.openRate ? (
                        <span>{notification.openRate}%</span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {notification.scheduledAt}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedNotification(notification)}
                        >
                          View Details
                        </Button>
                        {!notification.isSent && (
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Create Notification Dialog */}
        <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Notification</DialogTitle>
              <DialogDescription>
                Send a push notification to app users
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Notification Title</Label>
                <Input id="title" placeholder="Enter notification title" />
                <p className="text-xs text-muted-foreground mt-1">Max 50 characters</p>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Enter notification message"
                  rows={3}
                />
                <p className="text-xs text-muted-foreground mt-1">Max 150 characters</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      {audienceTypes.map((audience) => (
                        <SelectItem key={audience} value={audience.toLowerCase().replace(' ', '_')}>
                          {audience}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="schedule">Schedule</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Send time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Send Now</SelectItem>
                      <SelectItem value="schedule">Schedule Later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowCreateDialog(false)}>Cancel</Button>
                <Button className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Notification
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Notification Details Dialog */}
        <Dialog open={!!selectedNotification} onOpenChange={() => setSelectedNotification(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Notification Details</DialogTitle>
              <DialogDescription>
                Full notification analytics and information
              </DialogDescription>
            </DialogHeader>
            {selectedNotification && (
              <div className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <p className="font-medium">{selectedNotification.title}</p>
                </div>
                
                <div>
                  <Label>Message</Label>
                  <p>{selectedNotification.message}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Audience</Label>
                    {getAudienceBadge(selectedNotification.targetAudience)}
                  </div>
                  <div>
                    <Label>Status</Label>
                    {selectedNotification.isSent ? (
                      <Badge className="bg-green-500">Sent</Badge>
                    ) : (
                      <Badge className="bg-orange-500">Scheduled</Badge>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Recipients</Label>
                    <p className="font-medium">{selectedNotification.recipients.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label>Open Rate</Label>
                    <p className="font-medium">
                      {selectedNotification.openRate ? `${selectedNotification.openRate}%` : 'N/A'}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Created</Label>
                    <p className="text-sm">{selectedNotification.createdAt}</p>
                  </div>
                  <div>
                    <Label>Scheduled</Label>
                    <p className="text-sm">{selectedNotification.scheduledAt}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}