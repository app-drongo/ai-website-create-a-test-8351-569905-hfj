'use client';

import { ChevronRight, Home, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleStartTesting = () => {
    window.location.href = '/contact';
  };

  const handleViewSupport = () => {
    window.location.href = '/about';
  };

  return (
    <section className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link
              href="/"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Home className="size-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Contact TestFlow Pro</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Get Started with TestFlow Pro
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your QA process? Contact our testing experts to discuss your
                automation needs, schedule a personalized demo, or start your free trial of our
                comprehensive testing platform.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleViewSupport}>
                <MessageSquare className="size-4" />
                View Support
              </Button>
              <Button className="gap-2" onClick={handleStartTesting}>
                <Phone className="size-4" />
                Start Testing
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">24/7</span> Expert Support Available
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">99.9%</span> Testing accuracy
              guaranteed
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">50M+</span> Tests executed
              successfully
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Free</span> Trial available instantly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
