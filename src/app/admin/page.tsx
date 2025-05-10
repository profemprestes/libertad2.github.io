
"use client";

import { useState, useEffect } from 'react';
import { AdminLoginForm } from '@/components/admin/AdminLoginForm';
import { NewsArticleForm } from '@/components/admin/NewsArticleForm';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/shared/section-title';
import { LogOut, Newspaper } from 'lucide-react';
import type { Metadata } from 'next';

// Metadata cannot be exported from a client component. 
// If needed, this page could be structured with a server component wrapper for metadata.
// export const metadata: Metadata = {
//   title: 'Panel de Administración | Club Libertad',
//   description: 'Gestión de contenido del sitio web del Club Atlético Libertad.',
//   robots: {
//     index: false, // No indexar la página de admin
//     follow: false,
//   }
// };

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('adminAuthToken');
      // In a real app, validate this token with a backend
      if (token === 'supersecretadmintoken') {
        setIsAuthenticated(true);
      }
      document.title = 'Panel de Administración | Club Atlético Libertad';
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminAuthToken');
    }
    setIsAuthenticated(false);
    // Optionally redirect to home or show a logged out message
  };
  
  if (!isClient) {
    return ( // Basic skeleton while client loads
        <div className="container mx-auto px-4 py-8">
            <SectionTitle title="Panel de Administración" icon={Newspaper} />
            <div className="flex items-center justify-center min-h-[calc(100vh-20rem)]">
                 <p className="text-muted-foreground text-lg">Cargando...</p>
            </div>
        </div>
    );
  }


  if (!isAuthenticated) {
    return <AdminLoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div className="flex justify-between items-center">
        <SectionTitle 
          title="Gestión de Noticias" 
          icon={Newspaper} 
          description="Crea, edita y gestiona las noticias del club."
          className="mb-0 text-left"
          titleClassName="text-3xl lg:text-4xl"
        />
        <Button onClick={handleLogout} variant="outline" className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
        </Button>
      </div>
      
      <NewsArticleForm />

      {/* Future sections for managing other content (e.g., players, matches) could go here */}
    </div>
  );
}
