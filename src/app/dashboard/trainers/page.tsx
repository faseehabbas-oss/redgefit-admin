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
import { Search, MoreHorizontal, Check, X, Star, Calendar, Users } from 'lucide-react';

// Mock data
const mockTrainers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@fitness.com',
    isApproved: true,
    rating: 4.8,
    totalSessions: 234,
    specializations: ['Yoga', 'Pilates', 'Strength'],
    appliedDate: '2024-01-10',
    joinedDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Mike Williams',
    email: 'mike@fitness.com',
    isApproved: false,
    rating: 0,
    totalSessions: 0,
    specializations: ['HIIT', 'Cardio'],
    appliedDate: '2024-01-20',
    joinedDate: null,
  },
  {
    id: '3',
    name: 'Emma Davis',
    email: 'emma@fitness.com',
    isApproved: true,
    rating: 4.9,
    totalSessions: 456,
    specializations: ['CrossFit', 'Nutrition'],
    appliedDate: '2023-12-01',
    joinedDate: '2023-12-05',
  },
  {
    id: '4',
    name: 'Alex Thompson',
    email: 'alex@fitness.com',
    isApproved: false,
    rating: 0,
    totalSessions: 0,
    specializations: ['Boxing', 'MMA'],
    appliedDate: '2024-01-22',
    joinedDate: null,
  },
];

export default function TrainersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);

  const filteredTrainers = mockTrainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'approved' && trainer.isApproved) ||
                         (statusFilter === 'pending' && !trainer.isApproved);
    return matchesSearch && matchesStatus;
  });

  const pendingTrainers = mockTrainers.filter(t => !t.isApproved);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trainer Management</h1>
            <p className="text-muted-foreground">
              Approve trainers and monitor performance
            </p>
          </div>
          <Button>View Analytics</Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Trainers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+2 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Pending Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{pendingTrainers.length}</div>
              <p className="text-xs text-muted-foreground">Requires review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Avg Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">4.7</div>
              <p className="text-xs text-muted-foreground">From 1,234 reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,456</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {pendingTrainers.length > 0 && (
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Pending Approvals</CardTitle>
              <CardDescription>
                Review trainer applications that need approval
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTrainers.map((trainer) => (
                  <div key={trainer.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div>
                      <div className="font-medium">{trainer.name}</div>
                      <div className="text-sm text-muted-foreground">{trainer.email}</div>
                      <div className="flex gap-2 mt-1">
                        {trainer.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline">{spec}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                      <Button size="sm">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        <Card>
          <CardHeader>
            <CardTitle>All Trainers</CardTitle>
            <CardDescription>
              Manage trainer accounts and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search trainers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Trainers</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trainer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Sessions</TableHead>
                  <TableHead>Specializations</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrainers.map((trainer) => (
                  <TableRow key={trainer.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{trainer.name}</div>
                        <div className="text-sm text-muted-foreground">{trainer.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {trainer.isApproved ? (
                        <Badge className="bg-green-500">Approved</Badge>
                      ) : (
                        <Badge className="bg-orange-500">Pending</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {trainer.rating > 0 ? (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{trainer.rating}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>{trainer.totalSessions.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {trainer.specializations.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{trainer.appliedDate}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedTrainer(trainer)}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={!!selectedTrainer} onOpenChange={() => setSelectedTrainer(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Trainer Details</DialogTitle>
              <DialogDescription>
                View trainer performance and analytics
              </DialogDescription>
            </DialogHeader>
            {selectedTrainer && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Rating</Label>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">{selectedTrainer.rating}</span>
                    </div>
                  </div>
                  <div>
                    <Label>Total Sessions</Label>
                    <p className="text-2xl font-bold">{selectedTrainer.totalSessions.toLocaleString()}</p>
                  </div>
                </div>
                
                <div>
                  <Label>Specializations</Label>
                  <div className="flex gap-2 mt-1">
                    {selectedTrainer.specializations.map((spec: string, index: number) => (
                      <Badge key={index}>{spec}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    View Schedule
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    View Clients
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}