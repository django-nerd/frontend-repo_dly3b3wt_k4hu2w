import React from 'react';

const faqs = [
  {
    q: 'How do I choose the right vitamins?',
    a: 'Start with your goals: immunity, bones, or energy. Consult your healthcare provider if you have conditions or take medications.',
  },
  {
    q: 'Are these safe for daily use?',
    a: 'Yes, our vitamins follow safe daily values. Follow the label and store in a cool, dry place.',
  },
  { q: 'Where do you ship?', a: 'Nationwide shipping across the Philippines.' },
  { q: 'Do you accept returns?', a: '30-day returns for unopened items. Contact support with your order number.' },
];

const ShopFAQ = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-6 text-center font-heading text-2xl font-bold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-100 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopFAQ;
