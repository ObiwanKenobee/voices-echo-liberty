
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

const Auth = () => {
  const { user, loading, signIn, signUp } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('public_visitor');
  
  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(email, password, { 
      fullName, 
      organization, 
      role 
    });
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-crimson" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Tabs defaultValue="signin">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Join the Mission</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignIn}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email">Email</Label>
                      <Input 
                        id="signin-email"
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signin-password">Password</Label>
                      <Input 
                        id="signin-password"
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-crimson hover:bg-crimson/90"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Sign In
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Join the Mission</CardTitle>
                  <CardDescription>
                    Create your account to help protect wildlife and combat modern slavery
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSignUp}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full Name</Label>
                      <Input 
                        id="signup-name"
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email"
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input 
                        id="signup-password"
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-organization">Organization (Optional)</Label>
                      <Input 
                        id="signup-organization"
                        value={organization} 
                        onChange={(e) => setOrganization(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-role">Your Role</Label>
                      <Select value={role} onValueChange={setRole}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public_visitor">General Supporter</SelectItem>
                          <SelectItem value="activist">Activist</SelectItem>
                          <SelectItem value="donor">Donor</SelectItem>
                          <SelectItem value="researcher">Researcher</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="enforcer">Law Enforcement</SelectItem>
                          <SelectItem value="survivor">Survivor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold/90 text-earth-green"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Join the Mission
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
