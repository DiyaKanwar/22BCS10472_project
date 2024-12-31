import React from 'react';
import { ProgressChart } from '../components/Progress/ProgressChart';
import { Achievements } from '../components/Progress/Achievements';
import { MetricsGrid } from '../components/Progress/MetricsGrid';

export function ProgressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Progress Tracking</h1>
      <div className="space-y-8">
        <ProgressChart />
        <MetricsGrid />
        <Achievements />
      </div>
    </div>
  );
}