import React from 'react';
import { Clock, Video } from 'lucide-react';

export function UpcomingSessions() {
  const sessions = [
    { id: 1, title: 'Speed Training', coach: 'Coach Mike', time: '2:00 PM', date: 'Today' },
    { id: 2, title: 'Strength Training', coach: 'Coach Sarah', time: '10:00 AM', date: 'Tomorrow' },
    { id: 3, title: 'Agility Drills', coach: 'Coach John', time: '3:30 PM', date: 'Mar 15' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
      <div className="space-y-4">
        {sessions.map((session) => (
          <div
            key={session.id}
            className="p-4 rounded-lg border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{session.title}</h3>
              <span className="text-sm text-gray-500">{session.date}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{session.coach}</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{session.time}</span>
              </div>
            </div>
            <button className="mt-3 w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
              <Video className="h-4 w-4 mr-2" />
              Join Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}