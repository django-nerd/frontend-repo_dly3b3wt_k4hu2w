import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Star, Filter } from 'lucide-react';

const ALL_VITAMINS = [
  {
    id: 'vitaboost-c',
    name: 'VitaBoost C',
    category: 'Immunity',
    price: 199,
    rating: 4.7,
    tags: ['vitamin c', 'zinc', 'immunity'],
    desc: 'Daily Vitamin C + Zinc for immune defense and recovery.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 'sunshine-d3',
    name: 'Sunshine D3',
    category: 'Bone & Mood',
    price: 249,
    rating: 4.6,
    tags: ['vitamin d3', 'bones', 'energy'],
    desc: 'Vitamin D3 for bone strength, mood balance, and energy.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    id: 'iron-strong',
    name: 'Iron Strong',
    category: 'Energy',
    price: 229,
    rating: 4.5,
    tags: ['iron', 'b-complex', 'focus'],
    desc: 'Iron + B-Complex to reduce pagod and support focus.',
    color: 'from-orange-500 to-orange-600',
  },
];

const categories = ['All', 'Immunity', 'Bone & Mood', 'Energy'];

const VitaminsShop = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return ALL_VITAMINS.filter((p) => {
      const matchText = (
        p.name + p.category + p.desc + p.tags.join(' ')
      ).toLowerCase().includes(query.toLowerCase());
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      return matchText && matchCat;
    });
  }, [query, activeCategory]);

  return (
    <section id="shop" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">Shop Vitamins</h2>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
            <div className="relative flex-1 md:w-80">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search vitamins, benefits, tags"
                className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto md:overflow-visible">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium ${
                    activeCategory === c
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Filter className="h-4 w-4" /> {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
              >
                <div className={`h-24 w-full bg-gradient-to-r ${p.color}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                      <p className="text-xs font-medium text-emerald-700">{p.category}</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold text-slate-700">{p.rating}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-slate-900">₱{p.price}</span>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                      <ShoppingCart className="h-4 w-4" /> Add to cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VitaminsShop;
