import React from 'react';
import { Activity, Timer, Zap, Target } from 'lucide-react';

export function MetricsGrid() {
  const metrics = [
    { icon: Activity, label: 'Training Sessions', value: '24', change: '+3' },
    { icon: Timer, label: 'Average Duration', value: '45m', change: '+5m' },
    { icon: Zap, label: 'Performance Score', value: '92', change: '+2' },
    { icon: Target, label: 'Goals Achieved', value: '8', change: '+1' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center mb-4">
            <metric.icon className="h-5 w-5 text-indigo-600 mr-2" />
            <h3 className="font-medium text-gray-900">{metric.label}</h3>
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">{metric.value}</span>
            <span className="ml-2 text-sm font-medium text-green-600">{metric.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}