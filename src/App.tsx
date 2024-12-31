import React from 'react';
import { Header } from './components/Layout/Header';
import { WelcomeHero } from './components/Dashboard/WelcomeHero';
import { FeatureGrid } from './components/Dashboard/FeatureGrid';
import { TrainingPage } from './pages/TrainingPage';
import { ProgressPage } from './pages/ProgressPage';
import { SchedulePage } from './pages/SchedulePage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'training':
        return <TrainingPage />;
      case 'progress':
        return <ProgressPage />;
      case 'schedule':
        return <SchedulePage />;
      default:
        return (
          <>
            <WelcomeHero />
            <FeatureGrid />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;