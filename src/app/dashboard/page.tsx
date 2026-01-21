'use client';

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { RevenueChart, UserGrowthChart } from "@/components/dashboard/revenue-charts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground">
            Welcome to the RedgeFit admin dashboard - Monitor your fitness app performance
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="grid gap-6 md:grid-cols-2">
          <RevenueChart />
          <UserGrowthChart />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <RecentActivity />
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common admin tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <a 
                  href="/dashboard/users" 
                  className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Manage Users</div>
                  <div className="text-sm text-muted-foreground">8,234 total users</div>
                </a>
                <a 
                  href="/dashboard/trainers" 
                  className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Trainer Approvals</div>
                  <div className="text-sm text-muted-foreground">3 pending approvals</div>
                </a>
                <a 
                  href="/dashboard/community" 
                  className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="font-medium">Community Reports</div>
                  <div className="text-sm text-muted-foreground">5 reported posts</div>
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>
                Current system status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">API Status</span>
                  <span className="text-sm text-green-600">Operational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Database</span>
                  <span className="text-sm text-green-600">Healthy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">CDN Status</span>
                  <span className="text-sm text-green-600">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Last Sync</span>
                  <span className="text-sm text-muted-foreground">2 min ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}