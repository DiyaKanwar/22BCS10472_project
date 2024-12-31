import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export function WorkoutList() {
  const workouts = [
    { id: 1, name: 'Warm-up Routine', duration: '15 min', completed: true },
    { id: 2, name: 'Speed Training', duration: '30 min', completed: false },
    { id: 3, name: 'Strength Training', duration: '45 min', completed: false },
    { id: 4, name: 'Cool-down Routine', duration: '15 min', completed: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Workout Plan</h2>
      <div className="space-y-4">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors"
          >
            <div className="flex items-center">
              <CheckCircle className={`h-5 w-5 mr-3 ${workout.completed ? 'text-green-500' : 'text-gray-300'}`} />
              <span className="font-medium">{workout.name}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{workout.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}