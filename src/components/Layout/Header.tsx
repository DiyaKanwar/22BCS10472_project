import React, { useState } from 'react';
import { Menu, Dumbbell, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: 'dashboard', label: 'Dashboard' },
    { href: 'training', label: 'Training' },
    { href: 'progress', label: 'Progress' },
    { href: 'schedule', label: 'Schedule' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="flex items-center"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 text-transparent bg-clip-text">
                VirtualCoach
              </span>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavigate(item.href)}
                className={`nav-link ${currentPage === item.href ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button className="btn-primary py-2">
              Get Started
            </button>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  onNavigate(item.href);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium 
                           ${currentPage === item.href 
                             ? 'text-primary-600 bg-primary-50' 
                             : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                           }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full btn-primary justify-center mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}