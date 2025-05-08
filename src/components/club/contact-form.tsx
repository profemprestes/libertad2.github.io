"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from '@/server/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      reset(); // Reset form fields
    } else if (state.status === 'error' && state.message && !state.errors) {
      // General error not related to fields
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, reset]);
  
  // Combine server-side field errors with client-side for display
  const getFieldError = (fieldName: keyof ContactFormData) => 
    errors[fieldName]?.message || state.errors?.[fieldName]?.[0];

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
        <CardDescription>
          Have questions or want to learn more? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" {...register('name')} placeholder="John Doe" aria-invalid={!!getFieldError('name')} />
            {getFieldError('name') && <p className="text-sm text-destructive mt-1">{getFieldError('name')}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" {...register('email')} placeholder="john.doe@example.com" aria-invalid={!!getFieldError('email')} />
            {getFieldError('email') && <p className="text-sm text-destructive mt-1">{getFieldError('email')}</p>}
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" {...register('subject')} placeholder="Inquiry about tickets" aria-invalid={!!getFieldError('subject')} />
            {getFieldError('subject') && <p className="text-sm text-destructive mt-1">{getFieldError('subject')}</p>}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" {...register('message')} placeholder="Your message here..." rows={5} aria-invalid={!!getFieldError('message')} />
            {getFieldError('message') && <p className="text-sm text-destructive mt-1">{getFieldError('message')}</p>}
          </div>
          
          <SubmitButton />
          
        </form>
      </CardContent>
    </Card>
  );
}
