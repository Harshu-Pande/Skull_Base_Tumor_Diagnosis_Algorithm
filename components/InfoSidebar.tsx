import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

const InfoSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-slate-800 text-white p-3 rounded-full shadow-xl z-50 hover:bg-slate-700 transition-colors"
      >
        <Info className="w-6 h-6" />
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 right-0 h-full w-80 bg-white border-l border-slate-200 shadow-xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
        lg:transform-none lg:static lg:w-80 lg:shadow-none lg:border-l lg:z-auto
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
            <div className="flex justify-between items-center lg:hidden mb-4">
                <h2 className="text-lg font-bold text-slate-800">Reference</h2>
                <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3 text-amber-600">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Systemic / Nonspecific</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Violate anatomical rules. Always keep in differential.
            </p>
            <ul className="space-y-3">
              <li className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="block text-slate-800 text-sm">Lymphoma</strong>
                <span className="text-xs text-slate-600">T2 dark-ish, Strong DWI restriction.</span>
              </li>
              <li className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="block text-slate-800 text-sm">Metastasis</strong>
                <span className="text-xs text-slate-600">Lytic/Sclerotic, Multifocal, Rapid DCE.</span>
              </li>
              <li className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="block text-slate-800 text-sm">Multiple Myeloma</strong>
                <span className="text-xs text-slate-600">"Punched-out" lesions, Marrow replacement.</span>
              </li>
              <li className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="block text-slate-800 text-sm">Fibrous Dysplasia</strong>
                <span className="text-xs text-slate-600">Ground-glass on CT, Bone expansion.</span>
              </li>
              <li className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <strong className="block text-slate-800 text-sm">Infections</strong>
                <span className="text-xs text-slate-600">Irregular destruction, Abscesses.</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 text-indigo-600">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-bold text-sm uppercase tracking-wider">Pseudolesions</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Common mimics to avoid misdiagnosis.
            </p>
            <ul className="space-y-3">
              <li className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                <strong className="block text-slate-800 text-sm">High-riding Jugular Bulb</strong>
                <span className="text-xs text-slate-600">No enhancement, follows vascular flow void.</span>
              </li>
              <li className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                <strong className="block text-slate-800 text-sm">Asymmetric Marrow</strong>
                <span className="text-xs text-slate-600">Normal variation, preserved trabecular pattern.</span>
              </li>
              <li className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                <strong className="block text-slate-800 text-sm">Aerated Petrous Apex</strong>
                <span className="text-xs text-slate-600">Fluid signal, no bone destruction.</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default InfoSidebar;