'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Target,
  Users,
  Award,
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb,
} from 'lucide-react';

export default function About() {
  const handleReadStory = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewTeam = () => {
    const teamSection = document.querySelector('#team-section');
    teamSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const values = [
    {
      icon: Target,
      title: 'Testing Excellence',
      description:
        "We're committed to delivering the most accurate and comprehensive testing solutions that ensure your software meets the highest quality standards.",
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description:
        'We constantly push the boundaries of automated testing, bringing cutting-edge QA technology and smart analytics to development teams.',
    },
    {
      icon: Heart,
      title: 'Developer Focused',
      description:
        "Your testing success is our success. We build every feature with development teams' workflows and continuous integration needs at the center.",
    },
    {
      icon: Globe,
      title: 'Enterprise Scale',
      description:
        "From startups to Fortune 500 companies, we're helping development teams worldwide achieve 99.9% test accuracy and faster deployment cycles.",
    },
  ];

  const stats = [
    { value: '2019', label: 'Founded', icon: Award },
    { value: '10K+', label: 'Active Tests', icon: Users },
    { value: '99.8%', label: 'Test Accuracy', icon: TrendingUp },
    { value: '47', label: 'Test Suites', icon: Globe },
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Co-Founder',
      image: 'SM',
      bio: 'Former VP of QA at TestCorp. 15+ years building scalable testing platforms and automation frameworks.',
    },
    {
      name: 'Michael Zhang',
      role: 'CTO & Co-Founder',
      image: 'MZ',
      bio: 'Ex-Google engineer specializing in distributed testing systems and continuous integration pipelines.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'ER',
      bio: 'Award-winning product leader with experience building developer tools at top technology companies.',
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      image: 'DK',
      bio: 'Former Meta engineer passionate about test automation, real-time monitoring, and developer experience.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About TestFlow Pro
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Building the Future of
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              QA Automation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a passionate team of QA engineers, developers, and testing innovators on a mission
            to make comprehensive test automation accessible, powerful, and seamless for every
            development team.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Testing Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019 by a team of frustrated QA engineers, we set out to solve a critical
                problem: why was comprehensive test automation still so complex and unreliable?
              </p>
              <p>
                After years of wrestling with flaky tests, inconsistent results, and endless
                debugging sessions, we knew there had to be a better way to achieve 99.9% test
                accuracy with real-time monitoring.
              </p>
              <p>
                Today, we're proud to serve over 10,000 active test suites worldwide, helping
                development teams achieve faster deployments with our smart analytics and instant
                setup capabilities.
              </p>
            </div>
            <Button onClick={handleReadStory} className="group">
              Read Our Testing Journey
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "We believe comprehensive QA automation should be accessible to every
                      development team, not just enterprises with massive budgets."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Sarah Mitchell, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="text-center border-border/50 hover:border-primary/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Testing Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our QA automation platform and every testing solution we
              deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div id="team-section" className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet Our QA Team</h3>
            <p className="text-muted-foreground">
              The talented testing experts behind TestFlow Pro, working together to deliver 99.8%
              test accuracy and seamless automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button onClick={handleViewTeam} variant="outline" className="group">
              View All Testing Experts
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "TestFlow Pro has completely transformed our QA process. What used to take weeks of
                manual testing now runs automatically with 99.8% accuracy, and our deployment
                confidence has never been higher."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jessica Davis</div>
                  <div className="text-sm text-muted-foreground">CTO, DevTech Solutions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
