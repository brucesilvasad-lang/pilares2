// FIX: Implemented the main App component to orchestrate the application's views and state.
import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import Expenses from './components/Expenses';
import Report from './components/Report';
import Settings from './components/Settings';
import Accounting from './components/Accounting';
import usePilarisData from './hooks/usePilarisData';
import type { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const pilarisData = usePilarisData();

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard schedule={pilarisData.schedule} expenses={pilarisData.expenses} services={pilarisData.settings.services} />;
      case 'schedule':
        return <Schedule 
                  currentDate={pilarisData.currentDate}
                  onChangeDate={pilarisData.changeDate}
                  schedule={pilarisData.schedule} 
                  services={pilarisData.settings.services}
                  studentTags={pilarisData.settings.studentTags}
                  onUpdateStudent={pilarisData.updateStudent}
                  onAddStudentSlot={pilarisData.addStudentSlot}
                  onRemoveStudentSlot={pilarisData.removeStudentSlot}
                  onUpdateTimeSlot={pilarisData.updateTimeSlot}
                />;
      case 'expenses':
        return <Expenses expenses={pilarisData.expenses} onAddExpense={pilarisData.addExpense} onRemoveExpense={pilarisData.removeExpense} />;
      case 'report':
        return <Report 
                  currentDate={pilarisData.currentDate}
                  schedule={pilarisData.schedule} 
                  expenses={pilarisData.expenses}
                  services={pilarisData.settings.services}
                />;
       case 'accounting':
        return <Accounting services={pilarisData.settings.services} getAnnualData={pilarisData.getAnnualData} />;
      case 'settings':
        return <Settings settings={pilarisData.settings} onUpdateSettings={pilarisData.updateSettings} />;
      default:
        return <Dashboard schedule={pilarisData.schedule} expenses={pilarisData.expenses} services={pilarisData.settings.services} />;
    }
  };

  return (
    <div className="bg-brand-background min-h-screen font-sans">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="container mx-auto px-4 sm:px-6 py-4">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;