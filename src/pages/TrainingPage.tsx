import React from 'react';
import { TrainingCalendar } from '../components/Training/TrainingCalendar';
import { LiveSession } from '../components/Training/LiveSession';
import { WorkoutList } from '../components/Training/WorkoutList';

export function TrainingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Training Dashboard</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LiveSession />
          <WorkoutList />
        </div>
        <div className="lg:col-span-1">
          <TrainingCalendar />
        </div>
      </div>
    </div>
  );
}