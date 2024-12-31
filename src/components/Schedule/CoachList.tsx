import React from 'react';
import { Star } from 'lucide-react';

export function CoachList() {
  const coaches = [
    {
      id: 1,
      name: 'Mike Johnson',
      specialty: 'Speed Training',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Sarah Williams',
      specialty: 'Strength & Conditioning',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'John Smith',
      specialty: 'Agility Training',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Available Coaches</h2>
      <div className="space-y-4">
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-colors"
          >
            <img
              src={coach.image}
              alt={coach.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{coach.name}</h3>
              <p className="text-sm text-gray-600">{coach.specialty}</p>
            </div>
            <div className="flex items-center text-yellow-400">
              <Star className="h-4 w-4 mr-1 fill-current" />
              <span className="text-sm font-medium">{coach.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}