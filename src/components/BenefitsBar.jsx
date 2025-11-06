import React from 'react';
import { Shield, Truck, RefreshCw } from 'lucide-react';

const items = [
  { icon: Shield, title: 'Quality Assured', desc: 'Lab-tested formulas' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Nationwide shipping' },
  { icon: RefreshCw, title: '30-Day Returns', desc: 'Hassle-free support' },
];

const BenefitsBar = () => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-3 rounded-lg p-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="text-xs text-slate-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsBar;
