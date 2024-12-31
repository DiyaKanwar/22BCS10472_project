import React from 'react';
import { Play, Calendar, Activity, ChevronRight } from 'lucide-react';

export function WelcomeHero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium text-white">
                <span className="flex h-2 w-2 rounded-full bg-accent-400 animate-pulse mr-2" />
                Live AI Coaching Available
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                Transform Your <span className="text-accent-400">Athletic Journey</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Experience personalized AI-powered coaching and real-time feedback to elevate your performance to new heights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                <Play className="h-5 w-5 mr-2" />
                Start Training
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Session
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Active Users', value: '10K+' },
                { label: 'Training Hours', value: '50K+' },
                { label: 'Success Rate', value: '95%' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-primary-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="p-3 bg-accent-500 rounded-lg">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">Real-time Analysis</h3>
                    <p className="text-primary-200">Advanced AI-powered motion tracking</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Form Analysis', value: '98%', color: 'bg-accent-400' },
                    { label: 'Movement Score', value: '92%', color: 'bg-accent-500' }
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-primary-200">{metric.label}</span>
                        <span className="text-white font-medium">{metric.value}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full">
                        <div 
                          className={`h-full ${metric.color} rounded-full`}
                          style={{ width: metric.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-accent-400">24/7</div>
                    <div className="text-primary-200 text-sm">Access</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-3xl font-bold text-accent-400">AI</div>
                    <div className="text-primary-200 text-sm">Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}