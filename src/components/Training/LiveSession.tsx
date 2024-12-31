import React from 'react';
import { Camera, Mic, Settings } from 'lucide-react';

export function LiveSession() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Live Training Session</h2>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Camera className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Mic className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <p className="text-gray-500">Camera feed will appear here</p>
      </div>
      <button className="btn-primary w-full justify-center">
        Start Session
      </button>
    </div>
  );
}