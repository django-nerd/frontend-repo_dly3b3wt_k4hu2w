import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-sky-900/20 to-white/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-emerald-700 shadow"
        >
          Bagong araw, bagong sigla
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-heading text-4xl font-extrabold leading-tight text-slate-900 drop-shadow md:text-6xl"
        >
          Sustansya para sa bawat
          <span className="bg-gradient-to-r from-emerald-600 via-amber-500 to-orange-500 bg-clip-text text-transparent"> Pamilyang Pilipino</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-700 md:text-lg"
        >
          Pinasustansya brings accessible and affordable vitamins and minerals designed for everyday Filipino wellness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Shop Products
          </a>
          <a
            href="#about"
            className="rounded-lg bg-white/90 px-6 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
