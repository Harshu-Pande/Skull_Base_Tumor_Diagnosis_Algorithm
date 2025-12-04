import React, { useState, useEffect } from 'react';
import { ALGORITHM_DATA } from './data';
import { BrainCircuit } from 'lucide-react';
import DecisionCard from './components/DecisionCard';
import Breadcrumbs from './components/Breadcrumbs';
import InfoSidebar from './components/InfoSidebar';

const App: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['root']);
  const [currentNodeId, setCurrentNodeId] = useState<string>('root');

  // Ensure current node syncs with history (handles back navigation)
  useEffect(() => {
    setCurrentNodeId(history[history.length - 1]);
  }, [history]);

  const handleOptionSelect = (nextId: string) => {
    // Scroll to top for better UX on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHistory((prev) => [...prev, nextId]);
  };

  const handleNavigateHistory = (index: number) => {
    if (index === -1) {
      setHistory(['root']); // Home
    } else {
      setHistory((prev) => prev.slice(0, index + 1));
    }
  };

  const handleReset = () => {
    setHistory(['root']);
  };

  const currentNode = ALGORITHM_DATA[currentNodeId];

  // Fallback if node not found (dev safety)
  if (!currentNode) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-red-600">Error: Node not found</h1>
          <p className="text-slate-500 mb-4">Node ID: {currentNodeId}</p>
          <button onClick={handleReset} className="text-blue-600 underline">Reset</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50">
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-slate-900 leading-tight">Skull Base Tumor</h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide hidden sm:block">DIAGNOSTIC ALGORITHM</p>
              </div>
            </div>
            
            {history.length > 1 && (
               <button 
                 onClick={handleReset}
                 className="text-sm font-medium text-slate-500 hover:text-slate-900"
               >
                 Reset
               </button>
            )}
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 p-4 sm:p-6 lg:p-12 overflow-y-auto">
          <div className="max-w-3xl mx-auto w-full">
            
            <Breadcrumbs 
              history={history} 
              data={ALGORITHM_DATA} 
              onNavigate={handleNavigateHistory} 
            />

            <DecisionCard 
              node={currentNode} 
              onOptionSelect={handleOptionSelect}
              onReset={handleReset}
            />

            <footer className="mt-12 text-center text-xs text-slate-400">
              <p>© Scientific Radiology Reference Tool. Not for direct clinical diagnosis.</p>
              <p className="mt-1">Based on "Skull Base Tumor Diagnostic Algorithm"</p>
            </footer>

          </div>
        </div>
      </main>

      {/* Sidebar (Always visible on desktop, toggle on mobile) */}
      <InfoSidebar />
    </div>
  );
};

export default App;