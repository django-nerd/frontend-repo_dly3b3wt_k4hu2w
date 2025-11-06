import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const ShopHero = () => {
  return (
    <section id="home" className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* readability overlays must not block 3D interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-emerald-900/10 to-white/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl"
        >
          Vitamins for Everyday Filipino Wellness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-3 max-w-2xl text-slate-700"
        >
          Shop immune, bone, and energy support — affordable, accessible, and crafted for local needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 flex gap-4"
        >
          <a href="#shop" className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700">Browse Vitamins</a>
          <a href="#faq" className="rounded-lg bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-white">FAQ</a>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopHero;
