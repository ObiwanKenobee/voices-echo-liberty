
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, Globe, BarChart3, Calendar, MapPin, Users, FileText, Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, profile, signOut } = useAuth();
  const [dashboardPrefs, setDashboardPrefs] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchDashboardPreferences();
    }
  }, [user]);

  const fetchDashboardPreferences = async () => {
    try {
      const { data, error } = await supabase
        .from('dashboard_preferences')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error) throw error;
      setDashboardPrefs(data);
    } catch (error) {
      console.error('Error fetching dashboard preferences:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-crimson" />
      </div>
    );
  }

  // Role-specific content
  const getRoleContent = () => {
    switch (profile?.role) {
      case 'activist':
        return <ActivistDashboard />;
      case 'donor':
        return <DonorDashboard />;
      case 'researcher':
        return <ResearcherDashboard />;
      case 'developer':
        return <DeveloperDashboard />;
      case 'enforcer':
        return <EnforcerDashboard />;
      case 'survivor':
        return <SurvivorDashboard />;
      default:
        return <PublicDashboard />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-earth-green">Your Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {profile?.full_name || user?.email}
          </p>
          <p className="text-sm text-gray-500">
            Role: {profile?.role ? profile.role.replace('_', ' ').charAt(0).toUpperCase() + profile.role.replace('_', ' ').slice(1) : 'Loading...'}
          </p>
        </div>
        <Button onClick={signOut} variant="outline">
          Sign Out
        </Button>
      </div>

      {getRoleContent()}
    </div>
  );
};

// Role-specific dashboard components
const PublicDashboard = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <DashboardCard
      title="Latest Stories"
      description="Explore recent wildlife and human trafficking incidents"
      icon={<Globe className="h-6 w-6" />}
    />
    <DashboardCard
      title="Impact Statistics"
      description="See the difference our community is making"
      icon={<BarChart3 className="h-6 w-6" />}
    />
    <DashboardCard
      title="Upcoming Events"
      description="Join our awareness and action events"
      icon={<Calendar className="h-6 w-6" />}
    />
  </div>
);

const ActivistDashboard = () => (
  <Tabs defaultValue="incident-tracker">
    <TabsList className="mb-4">
      <TabsTrigger value="incident-tracker">Incident Tracker</TabsTrigger>
      <TabsTrigger value="report-form">Report Incident</TabsTrigger>
      <TabsTrigger value="community">Community</TabsTrigger>
    </TabsList>
    
    <TabsContent value="incident-tracker" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Wildlife Incidents Map"
        description="Interactive map of recent wildlife trafficking incidents"
        icon={<MapPin className="h-6 w-6" />}
      />
      <DashboardCard
        title="Human Trafficking Alerts"
        description="Recent reports and alerts in your region"
        icon={<AlertCircle className="h-6 w-6" />}
      />
      <DashboardCard
        title="Your Reports"
        description="Track the status of incidents you've reported"
        icon={<FileText className="h-6 w-6" />}
      />
    </TabsContent>
    
    <TabsContent value="report-form">
      <Card>
        <CardHeader>
          <CardTitle>Report an Incident</CardTitle>
          <CardDescription>
            Provide details about suspected wildlife or human trafficking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Incident reporting form will be implemented here
          </p>
        </CardContent>
      </Card>
    </TabsContent>
    
    <TabsContent value="community">
      <Card>
        <CardHeader>
          <CardTitle>Community Network</CardTitle>
          <CardDescription>
            Connect with other activists and coordinate efforts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Community features will be implemented here
          </p>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);

const DonorDashboard = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <DashboardCard
      title="Donation Impact"
      description="See how your contributions are making a difference"
      icon={<BarChart3 className="h-6 w-6" />}
    />
    <DashboardCard
      title="Donation History"
      description="View your past contributions and receipts"
      icon={<FileText className="h-6 w-6" />}
    />
    <DashboardCard
      title="Current Campaigns"
      description="Support our ongoing rescue and conservation efforts"
      icon={<Users className="h-6 w-6" />}
    />
  </div>
);

const ResearcherDashboard = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <DashboardCard
      title="Data Explorer"
      description="Access anonymized datasets for research"
      icon={<BarChart3 className="h-6 w-6" />}
    />
    <DashboardCard
      title="Research Library"
      description="Browse and contribute to our knowledge base"
      icon={<FileText className="h-6 w-6" />}
    />
    <DashboardCard
      title="Collaboration Requests"
      description="Connect with other researchers and organizations"
      icon={<Users className="h-6 w-6" />}
    />
  </div>
);

const DeveloperDashboard = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <DashboardCard
      title="API Documentation"
      description="Access our APIs and developer tools"
      icon={<FileText className="h-6 w-6" />}
    />
    <DashboardCard
      title="Contribution Stats"
      description="Track your code contributions and impact"
      icon={<BarChart3 className="h-6 w-6" />}
    />
    <DashboardCard
      title="Bug Bounty"
      description="Help us improve our platform security"
      icon={<Shield className="h-6 w-6" />}
    />
  </div>
);

const EnforcerDashboard = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <DashboardCard
      title="Real-time Alerts"
      description="Critical incidents requiring immediate attention"
      icon={<AlertCircle className="h-6 w-6" />}
    />
    <DashboardCard
      title="Intelligence Dashboard"
      description="Analysis and patterns of trafficking networks"
      icon={<BarChart3 className="h-6 w-6" />}
    />
    <DashboardCard
      title="Secure Communication"
      description="Encrypted messaging with trusted partners"
      icon={<Shield className="h-6 w-6" />}
    />
  </div>
);

const SurvivorDashboard = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <DashboardCard
      title="Support Resources"
      description="Access to counseling and recovery services"
      icon={<Users className="h-6 w-6" />}
    />
    <DashboardCard
      title="Case Management"
      description="Track your case progress (end-to-end encrypted)"
      icon={<FileText className="h-6 w-6" />}
    />
    <DashboardCard
      title="Secure Messaging"
      description="Private communication with support professionals"
      icon={<Shield className="h-6 w-6" />}
    />
  </div>
);

// Reusable component for dashboard cards
const DashboardCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      <div className="text-crimson">{icon}</div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Button className="mt-4 w-full" variant="outline">
        View
      </Button>
    </CardContent>
  </Card>
);

export default Dashboard;
