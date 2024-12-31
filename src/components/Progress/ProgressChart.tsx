import React from 'react';
import { BarChart, ArrowUp } from 'lucide-react';

export function ProgressChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BarChart className="h-5 w-5 text-indigo-600 mr-2" />
          <h2 className="text-xl font-semibold">Performance Overview</h2>
        </div>
        <div className="flex items-center text-green-600">
          <ArrowUp className="h-4 w-4 mr-1" />
          <span>12% improvement</span>
        </div>
      </div>
      <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Performance chart coming soon</p>
      </div>
    </div>
  );
}