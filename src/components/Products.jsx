import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Info } from 'lucide-react';

const products = [
  {
    name: 'VitaBoost C',
    desc: 'Vitamin C + Zinc for daily immune support',
    benefits: ['Supports immunity', 'Helps with recovery', 'Antioxidant protection'],
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Sunshine D3',
    desc: 'Vitamin D3 for bone health and energy',
    benefits: ['Bone strength', 'Mood support', 'Muscle function'],
    color: 'from-amber-500 to-amber-600'
  },
  {
    name: 'Iron Strong',
    desc: 'Iron + B-Complex for energy and focus',
    benefits: ['Combats pagod', 'Supports cognition', 'Daily vitality'],
    color: 'from-orange-500 to-orange-600'
  }
];

const Products = () => {
  return (
    <section id="products" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">Our Products</h2>
            <p className="mt-2 text-slate-600">Affordable, science-backed supplements for everyday wellness.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 md:inline-block">
            Contact Sales
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
            >
              <div className={`h-28 w-full bg-gradient-to-r ${p.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-700">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                    <ShoppingCart className="h-4 w-4" /> Buy Now
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200">
                    <Info className="h-4 w-4" /> Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
