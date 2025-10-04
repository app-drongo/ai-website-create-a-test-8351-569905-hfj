'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap, CheckCircle, Globe, Rocket } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/contact'); // Lead to conversion/contact
  };

  const handleSecondaryAction = () => {
    setIsVideoOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/about'); // Learn more about features
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative py-20">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
            >
              <Zap className="size-4 mr-2" />
              Revolutionary Testing Platform Now Live
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Testing Strategy
              </span>
              With TestFlow Pro
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your quality assurance process with our intelligent testing automation
              platform. Reduce testing time by 75% while increasing coverage and reliability across
              all your applications.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="size-5 text-primary" />
                <span>Automated Test Generation</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="size-5 text-primary" />
                <span>Cross-Platform Testing</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Rocket className="size-5 text-primary" />
                <span>CI/CD Integration</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="group text-base px-8 py-4" onClick={handlePrimaryAction}>
                Start Free Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 py-4"
                onClick={handleSecondaryAction}
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Platform Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground mb-16">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background" />
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 border-2 border-background" />
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  2,500+ QA teams trust us
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 from 1,200+ reviews</span>
              </div>

              <div className="text-muted-foreground">
                <strong className="text-foreground">75%</strong> faster deployment
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Test Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                <div className="text-muted-foreground">Tests Executed Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Continuous Monitoring</div>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-6xl">
              <div className="rounded-2xl border bg-card p-4 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/30 to-muted/60 aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Mock Dashboard Elements */}
                  <div className="absolute inset-4 grid grid-cols-12 gap-2">
                    <div className="col-span-3 bg-background/80 rounded-lg p-3">
                      <div className="h-2 bg-primary/60 rounded mb-2"></div>
                      <div className="h-1 bg-muted rounded mb-1"></div>
                      <div className="h-1 bg-muted rounded"></div>
                    </div>
                    <div className="col-span-6 bg-background/80 rounded-lg p-3">
                      <div className="h-1 bg-muted rounded mb-2"></div>
                      <div className="h-8 bg-primary/20 rounded mb-2"></div>
                      <div className="flex gap-1">
                        <div className="h-1 bg-accent rounded flex-1"></div>
                        <div className="h-1 bg-secondary rounded flex-1"></div>
                      </div>
                    </div>
                    <div className="col-span-3 bg-background/80 rounded-lg p-3">
                      <div className="h-2 bg-accent/60 rounded mb-2"></div>
                      <div className="h-1 bg-muted rounded mb-1"></div>
                      <div className="h-1 bg-muted rounded"></div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/10 backdrop-blur-sm">
                    <button
                      onClick={handleSecondaryAction}
                      className="size-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                    >
                      <Play className="size-10 text-primary-foreground ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -right-4 size-6 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-8 size-4 bg-secondary rounded-full animate-pulse delay-500" />
              <div className="absolute top-1/4 -left-6 size-5 bg-primary/60 rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Placeholder */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">TestFlow Pro Platform Demo</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsVideoOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Play className="size-16 mx-auto mb-4" />
                <p>Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
