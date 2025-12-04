import React from 'react';
import { AlgorithmData } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  history: string[];
  data: AlgorithmData;
  onNavigate: (index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ history, data, onNavigate }) => {
  return (
    <nav className="flex items-center text-sm text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
      <button 
        onClick={() => onNavigate(-1)}
        className="flex items-center hover:text-blue-600 transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        <span className="sr-only">Home</span>
      </button>
      
      {history.map((nodeId, index) => {
        const node = data[nodeId];
        const isLast = index === history.length - 1;
        
        return (
          <React.Fragment key={nodeId}>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
            <button
              onClick={() => !isLast && onNavigate(index)}
              disabled={isLast}
              className={`
                truncate max-w-[150px] sm:max-w-[200px]
                ${isLast ? 'font-semibold text-slate-800 cursor-default' : 'hover:text-blue-600 cursor-pointer'}
              `}
            >
              {node.title}
            </button>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;