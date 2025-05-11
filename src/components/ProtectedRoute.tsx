
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermission?: string;
}

export const ProtectedRoute = ({ 
  children,
  requiredPermission
}: ProtectedRouteProps) => {
  const { user, loading, profile } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-crimson" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  // If a specific permission is required, check if user has it
  if (requiredPermission && profile) {
    // This is a simplified check - in a production app, you'd fetch permissions from your backend
    // or implement a more robust permission checking system
    const hasPermission = false; // Replace with actual permission check
    if (!hasPermission) {
      return <Navigate to="/dashboard" />;
    }
  }

  return <>{children}</>;
};
