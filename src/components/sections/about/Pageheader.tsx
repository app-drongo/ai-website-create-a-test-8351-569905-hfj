'use client';

import { ChevronRight, Home, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pageheader() {
  const handleFilterClick = () => {
    console.log('Opening filter options');
  };

  const handleSearchClick = () => {
    console.log('Initiating search');
  };

  return (
    <section className="bg-background border-b border">
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
            <Link href="/testing" className="hover:text-foreground transition-colors">
              Testing Hub
            </Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Quality Assurance Dashboard</span>
          </nav>

          {/* Title and Description */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                TestFlow Pro Testing Suite
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive testing platform with 47 active test environments. From automated unit
                tests to full integration testing, monitor and manage your entire QA pipeline.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2" onClick={handleFilterClick}>
                <Filter className="size-4" />
                Filter Tests
              </Button>
              <Button className="gap-2" onClick={handleSearchClick}>
                <Search className="size-4" />
                Run Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">47</span> Active Test Suites
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">98.7%</span> Pass Rate
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">2.3s</span> Average Runtime
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">24/7</span> Continuous Integration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
