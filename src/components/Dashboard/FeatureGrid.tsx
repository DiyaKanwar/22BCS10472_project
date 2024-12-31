import React from 'react';
import { Video, Trophy, Target, Users, Zap, BarChart, Shield, Heart } from 'lucide-react';

export function FeatureGrid() {
  const features = [
    {
      icon: Video,
      title: 'Live Training',
      description: 'Real-time video analysis and instant feedback during your training sessions',
      color: 'text-blue-600',
      gradient: 'from-blue-500/10 to-blue-600/10'
    },
    {
      icon: Trophy,
      title: 'Progress Tracking',
      description: 'Monitor your improvements with detailed analytics and achievement milestones',
      color: 'text-amber-600',
      gradient: 'from-amber-500/10 to-amber-600/10'
    },
    {
      icon: Target,
      title: 'Custom Plans',
      description: 'AI-generated training programs perfectly tailored to your goals and abilities',
      color: 'text-red-600',
      gradient: 'from-red-500/10 to-red-600/10'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with fellow athletes, share achievements, and stay motivated together',
      color: 'text-indigo-600',
      gradient: 'from-indigo-500/10 to-indigo-600/10'
    },
    {
      icon: Zap,
      title: 'Instant Feedback',
      description: 'Get immediate suggestions to improve your form and technique',
      color: 'text-yellow-600',
      gradient: 'from-yellow-500/10 to-yellow-600/10'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Deep insights into your training patterns and improvement areas',
      color: 'text-green-600',
      gradient: 'from-green-500/10 to-green-600/10'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'AI-powered analysis to help prevent injuries and maintain proper form',
      color: 'text-purple-600',
      gradient: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track vital signs and wellness metrics throughout your training',
      color: 'text-pink-600',
      gradient: 'from-pink-500/10 to-pink-600/10'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to excel
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our comprehensive platform provides all the tools and support you need to reach your athletic potential.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-card group"
          >
            <div className={`rounded-lg p-3 inline-block bg-gradient-to-br ${feature.gradient}`}>
              <feature.icon className={`h-6 w-6 ${feature.color}`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2 group-hover:text-indigo-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}