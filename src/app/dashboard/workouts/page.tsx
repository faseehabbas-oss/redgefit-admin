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
import { Search, Plus, Play, Edit, Trash2, Upload, Clock, BarChart3 } from 'lucide-react';

// Mock data
const mockWorkouts = [
  {
    id: '1',
    title: 'HIIT Cardio Blast',
    description: 'High intensity interval training for maximum calorie burn',
    duration: 30,
    difficulty: 'advanced',
    category: 'Cardio',
    tags: ['HIIT', 'Fat Burn', 'Advanced'],
    instructor: 'Sarah Johnson',
    createdAt: '2024-01-15',
    isActive: true,
    views: 2341,
    completions: 1823,
  },
  {
    id: '2',
    title: 'Yoga Flow for Beginners',
    description: 'Gentle yoga sequence perfect for beginners',
    duration: 45,
    difficulty: 'beginner',
    category: 'Yoga',
    tags: ['Yoga', 'Flexibility', 'Beginner'],
    instructor: 'Emma Davis',
    createdAt: '2024-01-12',
    isActive: true,
    views: 1876,
    completions: 1543,
  },
  {
    id: '3',
    title: 'Strength Training Basics',
    description: 'Build foundational strength with compound exercises',
    duration: 40,
    difficulty: 'intermediate',
    category: 'Strength',
    tags: ['Strength', 'Muscle', 'Intermediate'],
    instructor: 'Mike Williams',
    createdAt: '2024-01-10',
    isActive: false,
    views: 987,
    completions: 765,
  },
  {
    id: '4',
    title: 'Pilates Core Power',
    description: 'Strengthen your core with Pilates exercises',
    duration: 25,
    difficulty: 'intermediate',
    category: 'Pilates',
    tags: ['Pilates', 'Core', 'Intermediate'],
    instructor: 'Sarah Johnson',
    createdAt: '2024-01-08',
    isActive: true,
    views: 1456,
    completions: 1234,
  },
];

const categories = ['All', 'Cardio', 'Strength', 'Yoga', 'Pilates', 'HIIT', 'Flexibility'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [editingWorkout, setEditingWorkout] = useState<any>(null);

  const filteredWorkouts = mockWorkouts.filter(workout => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || workout.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesDifficulty = difficultyFilter === 'all' || workout.difficulty === difficultyFilter.toLowerCase();
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-500',
      intermediate: 'bg-yellow-500',
      advanced: 'bg-red-500',
    };
    return <Badge className={colors[difficulty as keyof typeof colors]}>{difficulty}</Badge>;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Workout Library</h1>
            <p className="text-muted-foreground">
              Manage workout videos, categories, and metadata
            </p>
          </div>
          <Button onClick={() => setShowUploadDialog(true)} className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload Workout
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Workouts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Total Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89.2K</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Completions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67.4K</div>
              <p className="text-xs text-muted-foreground">75.6% rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Avg Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35 min</div>
              <p className="text-xs text-muted-foreground">Across all workouts</p>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Workout Management</CardTitle>
            <CardDescription>
              Upload, categorize, and manage workout videos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search workouts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty.toLowerCase()}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Workout</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredWorkouts.map((workout) => (
                  <TableRow key={workout.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{workout.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {workout.description}
                        </div>
                        <div className="flex gap-1 mt-1">
                          {workout.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{workout.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {workout.duration} min
                      </div>
                    </TableCell>
                    <TableCell>
                      {getDifficultyBadge(workout.difficulty)}
                    </TableCell>
                    <TableCell>{workout.instructor}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <BarChart3 className="h-3 w-3" />
                        {workout.views.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      {workout.isActive ? (
                        <Badge className="bg-green-500">Active</Badge>
                      ) : (
                        <Badge variant="secondary">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setEditingWorkout(workout)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Play className="h-4 w-4" />
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

        {/* Upload Dialog */}
        <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Upload New Workout</DialogTitle>
              <DialogDescription>
                Add a new workout video to the library
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Workout Title</Label>
                  <Input id="title" placeholder="Enter workout title" />
                </div>
                <div>
                  <Label htmlFor="instructor">Instructor</Label>
                  <Input id="instructor" placeholder="Instructor name" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the workout" />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" placeholder="30" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.slice(1).map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="HIIT, Fat Burn, Advanced" />
              </div>
              
              <div>
                <Label htmlFor="video">Video File</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">MP4, MOV up to 500MB</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button onClick={() => setShowUploadDialog(false)}>Cancel</Button>
                <Button>Upload Workout</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}