
"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, LogIn, AlertCircle } from 'lucide-react';

interface AdminLoginFormProps {
  onLoginSuccess: () => void;
}

const ADMIN_USERNAME = "Admin";
const ADMIN_PASSWORD = "123456789"; // Store securely in environment variables in a real app

export function AdminLoginForm({ onLoginSuccess }: AdminLoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminAuthToken', 'supersecretadmintoken'); // In a real app, use a proper token
      }
      onLoginSuccess();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-2xl font-bold text-primary">Acceso de Administrador</CardTitle>
          <CardDescription>Por favor, inicia sesión para gestionar las noticias.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="admin-username">Nombre de Usuario</Label>
              <Input
                id="admin-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuario administrador"
                required
                className="bg-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">Contraseña</Label>
              <Input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                className="bg-input"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {error}
              </p>
            )}
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
