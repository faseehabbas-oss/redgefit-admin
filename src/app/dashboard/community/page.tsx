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
import { Search, AlertTriangle, Eye, Trash2, MessageSquare, Users, TrendingUp, Clock } from 'lucide-react';

// Mock data
const mockReportedPosts = [
  {
    id: '1',
    postId: 'post_1',
    reportedBy: 'user_123',
    reporterName: 'Sarah Johnson',
    userName: 'Mike Williams',
    userAvatar: '/api/placeholder/40/40',
    content: 'This is an inappropriate post that violates community guidelines...',
    imageUrl: '/api/placeholder/200/150',
    reportedAt: '2024-01-22 14:30',
    createdAt: '2024-01-22 14:30',
    reason: 'Inappropriate content',
    status: 'pending',
    likes: 45,
    comments: 12,
  },
  {
    id: '2',
    postId: 'post_2',
    reportedBy: 'user_456',
    reporterName: 'Emma Davis',
    userName: 'Alex Thompson',
    userAvatar: '/api/placeholder/40/40',
    content: 'Spam content promoting external services...',
    reportedAt: '2024-01-22 13:15',
    createdAt: '2024-01-22 13:15',
    reason: 'Spam',
    status: 'pending',
    likes: 23,
    comments: 5,
  },
  {
    id: '3',
    postId: 'post_3',
    reportedBy: 'user_789',
    reporterName: 'John Martinez',
    userName: 'Lisa Chen',
    userAvatar: '/api/placeholder/40/40',
    content: 'Harassment towards other community members...',
    reportedAt: '2024-01-22 12:00',
    createdAt: '2024-01-22 12:00',
    reason: 'Harassment',
    status: 'reviewed',
    likes: 8,
    comments: 3,
  },
];

const mockPosts = [
  {
    id: '1',
    userName: 'Sarah Johnson',
    userAvatar: '/api/placeholder/40/40',
    content: 'Just completed my 30-day challenge! Feeling amazing! 💪',
    imageUrl: '/api/placeholder/300/200',
    createdAt: '2024-01-22 15:30',
    likes: 234,
    comments: 45,
    isReported: false,
  },
  {
    id: '2',
    userName: 'Mike Williams',
    userAvatar: '/api/placeholder/40/40',
    content: 'New personal record on bench press today! Thanks for the great program!',
    createdAt: '2024-01-22 14:15',
    likes: 156,
    comments: 23,
    isReported: false,
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'reported' | 'all'>('reported');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const filteredReportedPosts = mockReportedPosts.filter(post => {
    const matchesSearch = post.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredAllPosts = mockPosts.filter(post => {
    const matchesSearch = post.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: 'bg-yellow-500',
      reviewed: 'bg-blue-500',
      resolved: 'bg-green-500',
    };
    return <Badge className={colors[status as keyof typeof colors]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Community Management</h1>
            <p className="text-muted-foreground">
              Moderate community posts and handle user reports
            </p>
          </div>
          <Button variant="outline">Export Reports</Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,678</div>
              <p className="text-xs text-muted-foreground">+892 today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Reported Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{mockReportedPosts.length}</div>
              <p className="text-xs text-muted-foreground">Requires review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">12,345</div>
              <p className="text-xs text-muted-foreground">Posted this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">8.7%</div>
              <p className="text-xs text-muted-foreground">Likes + comments</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Pending Review Reports
            </CardTitle>
            <CardDescription>
              Posts reported by community users that require immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockReportedPosts.filter(p => p.status === 'pending').map((report) => (
                <div key={report.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-medium">Reported by {report.reporterName}</div>
                      <div className="text-sm text-muted-foreground">{report.reportedAt}</div>
                    </div>
                    <div className="flex gap-2">
                      {getStatusBadge(report.status)}
                      <Badge variant="outline">{report.reason}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="font-medium">{report.userName}</span>
                      </div>
                      <p className="text-sm mb-2">{report.content}</p>
                      {report.imageUrl && (
                        <img src={report.imageUrl} alt="Post" className="w-32 h-24 object-cover rounded" />
                      )}
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{report.likes} likes</span>
                        <span>{report.comments} comments</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View Post
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Community Posts</CardTitle>
                <CardDescription>
                  View all community posts and manage content
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={activeTab === 'reported' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('reported')}
                >
                  Reported ({mockReportedPosts.length})
                </Button>
                <Button
                  variant={activeTab === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('all')}
                >
                  All Posts
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              {activeTab === 'reported' && (
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Content</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Posted</TableHead>
                  {activeTab === 'reported' && <TableHead>Report Info</TableHead>}
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(activeTab === 'reported' ? filteredReportedPosts : filteredAllPosts).map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <span className="font-medium">{post.userName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="max-w-md">
                        <p className="line-clamp-2">{post.content}</p>
                        {post.imageUrl && <span className="text-xs text-muted-foreground">[Image]</span>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3 text-sm">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.createdAt}
                      </div>
                    </TableCell>
                    {activeTab === 'reported' && (
                      <TableCell>
                        <div className="space-y-1">
                          <Badge variant="outline">{(post as any).reason}</Badge>
                          <div className="text-xs text-muted-foreground">
                            by {(post as any).reporterName}
                          </div>
                        </div>
                      </TableCell>
                    )}
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedPost(post)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Post Preview Dialog */}
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Post Preview</DialogTitle>
              <DialogDescription>
                Review post content and engagement
              </DialogDescription>
            </DialogHeader>
            {selectedPost && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium">{selectedPost.userName}</div>
                    <div className="text-sm text-muted-foreground">{selectedPost.createdAt}</div>
                  </div>
                </div>
                
                <p className="text-base">{selectedPost.content}</p>
                
                {selectedPost.imageUrl && (
                  <img src={selectedPost.imageUrl} alt="Post" className="w-full max-w-md rounded-lg" />
                )}
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{selectedPost.likes} likes</span>
                  <span>{selectedPost.comments} comments</span>
                  {selectedPost.isReported && <Badge variant="destructive">Reported</Badge>}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline">Ignore Report</Button>
                  <Button variant="destructive">Delete Post</Button>
                  <Button>Ban User</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}