'use client';

import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Shield, Bell, Palette, Globe, Users } from 'lucide-react';

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure your RedgeFit application settings
          </p>
        </div>
        
        <div className="grid gap-6">
          {/* App Version Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                App Version Control
              </CardTitle>
              <CardDescription>
                Manage minimum supported app versions and force updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="ios-version">Minimum iOS Version</Label>
                  <Input id="ios-version" placeholder="2.1.0" />
                </div>
                <div>
                  <Label htmlFor="android-version">Minimum Android Version</Label>
                  <Input id="android-version" placeholder="2.1.0" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="force-update" />
                <Label htmlFor="force-update">Force update for users below minimum version</Label>
              </div>
              <Button>Save Version Settings</Button>
            </CardContent>
          </Card>
          
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>
                Configure basic application settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="app-name">Application Name</Label>
                <Input id="app-name" defaultValue="RedgeFit" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="app-description">Description</Label>
                <Input id="app-description" defaultValue="Fitness Management Platform" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" defaultValue="support@redgefit.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Save General Settings</Button>
            </CardContent>
          </Card>
          
          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Configure security and privacy settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" defaultChecked />
                <Label htmlFor="two-factor">Enable two-factor authentication for admins</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="session-timeout" defaultChecked />
                <Label htmlFor="session-timeout">Auto logout after 30 minutes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="audit-logs" defaultChecked />
                <Label htmlFor="audit-logs">Enable admin action logging</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="rate-limit" defaultChecked />
                <Label htmlFor="rate-limit">Enable API rate limiting</Label>
              </div>
              <Button>Update Security Settings</Button>
            </CardContent>
          </Card>
          
          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure push notification and email preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="push-notifications" defaultChecked />
                <Label htmlFor="push-notifications">Enable push notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="email-notifications" defaultChecked />
                <Label htmlFor="email-notifications">Enable email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="daily-digest" />
                <Label htmlFor="daily-digest">Send daily digest to admins</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notification-rate">Maximum notifications per user per day</Label>
                <Input id="notification-rate" type="number" defaultValue="5" />
              </div>
              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
          
          {/* User Management Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Management
              </CardTitle>
              <CardDescription>
                Configure user registration and behavior settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="free-trial-days">Free Trial Duration (days)</Label>
                <Input id="free-trial-days" type="number" defaultValue="14" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="max-login-attempts">Maximum Login Attempts</Label>
                <Input id="max-login-attempts" type="number" defaultValue="5" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="email-verification" defaultChecked />
                <Label htmlFor="email-verification">Require email verification</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-approve-trainers" />
                <Label htmlFor="auto-approve-trainers">Auto-approve trainer applications</Label>
              </div>
              <Button>Save User Settings</Button>
            </CardContent>
          </Card>
          
          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Admin Account</CardTitle>
              <CardDescription>
                Manage your admin account settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input id="admin-email" type="email" defaultValue="admin@redgefit.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="admin-name">Display Name</Label>
                <Input id="admin-name" defaultValue="Admin User" />
              </div>
              <Button variant="outline">Change Password</Button>
              <Separator />
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}