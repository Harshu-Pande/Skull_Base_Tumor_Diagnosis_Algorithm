import React from 'react';
import { Node, NodeType, Option } from '../types';
import { ArrowRight, Activity, CheckCircle2, RotateCcw } from 'lucide-react';

interface DecisionCardProps {
  node: Node;
  onOptionSelect: (nextId: string) => void;
  onReset: () => void;
}

const DecisionCard: React.FC<DecisionCardProps> = ({ node, onOptionSelect, onReset }) => {
  const isDiagnosis = node.type === NodeType.DIAGNOSIS;

  if (isDiagnosis) {
    let colorClass = 'bg-teal-600';
    let icon = <CheckCircle2 className="w-12 h-12 text-teal-100" />;
    
    if (node.severity === 'malignant') {
      colorClass = 'bg-rose-600';
      icon = <Activity className="w-12 h-12 text-rose-100" />;
    } else if (node.severity === 'intermediate') {
      colorClass = 'bg-amber-600';
    }

    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
        <div className={`${colorClass} p-8 text-white flex items-center gap-4`}>
          <div className="p-3 bg-white/20 rounded-full">
            {icon}
          </div>
          <div>
            <h2 className="text-sm font-medium opacity-90 uppercase tracking-widest">Diagnosis</h2>
            <h1 className="text-3xl font-bold mt-1">{node.title}</h1>
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-slate-800 font-semibold mb-4 text-lg">Key Imaging Features</h3>
          <ul className="space-y-3 mb-8">
            {node.features?.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${node.severity === 'malignant' ? 'bg-rose-400' : 'bg-teal-400'}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={onReset}
            className="w-full py-4 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
        </div>
      </div>
    );
  }

  // QUESTION CARD
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in slide-in-from-right-8 duration-300">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Diagnostic Step</h2>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{node.title}</h1>
        {node.content && (
          <p className="text-slate-500">{node.content}</p>
        )}
      </div>

      <div className="p-8 grid gap-4">
        {node.options?.map((option: Option) => (
          <button
            key={option.id}
            onClick={() => onOptionSelect(option.nextId)}
            className="group relative flex items-start gap-4 p-5 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left w-full"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                {option.label}
              </h3>
              {option.description && (
                <p className="text-sm text-slate-500 mt-1 group-hover:text-blue-600/80">
                  {option.description}
                </p>
              )}
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 mt-1" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DecisionCard;