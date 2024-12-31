import React from 'react';
import { Calendar } from 'lucide-react';

export function TrainingCalendar() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Training Schedule</h2>
      </div>
      <div className="space-y-4">
        {/* Calendar implementation will go here */}
        <p className="text-gray-500">Calendar view coming soon</p>
      </div>
    </div>
  );
}