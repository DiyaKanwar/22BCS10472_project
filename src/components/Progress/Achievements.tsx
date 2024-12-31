import React from 'react';
import { Trophy, Star } from 'lucide-react';

export function Achievements() {
  const achievements = [
    { title: 'Perfect Form', description: 'Maintained excellent form for 5 consecutive sessions', progress: 80 },
    { title: 'Consistency King', description: 'Completed all scheduled sessions this week', progress: 100 },
    { title: 'Speed Demon', description: 'Improved sprint time by 0.5 seconds', progress: 60 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center mb-6">
        <Trophy className="h-5 w-5 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Recent Achievements</h2>
      </div>
      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <div className="flex items-center mb-2">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <h3 className="font-medium text-gray-900">{achievement.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-indigo-600 rounded-full h-2"
                style={{ width: `${achievement.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}