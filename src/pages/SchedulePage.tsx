import React from 'react';
import { Calendar } from '../components/Schedule/Calendar';
import { UpcomingSessions } from '../components/Schedule/UpcomingSessions';
import { CoachList } from '../components/Schedule/CoachList';

export function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Schedule</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Calendar />
        </div>
        <div className="lg:col-span-1 space-y-8">
          <UpcomingSessions />
          <CoachList />
        </div>
      </div>
    </div>
  );
}