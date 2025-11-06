import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Leaf } from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-6 w-6 text-emerald-600" />,
    title: 'Trustworthy Quality',
    desc: 'Formulated with care and tested for safety to support everyday health.'
  },
  {
    icon: <Leaf className="h-6 w-6 text-amber-500" />,
    title: 'Accessible & Affordable',
    desc: 'Nutritious choices that fit every Filipino budget and lifestyle.'
  },
  {
    icon: <Heart className="h-6 w-6 text-rose-500" />,
    title: 'Made for Filipinos',
    desc: 'Focused on local needs, climate, and daily habits for real results.'
  }
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Ang Kuwento ng Pinasustansya
            </h2>
            <p className="mt-4 text-slate-700">
              Our mission is simple: to uplift health and nutrition across the Philippines by making vitamins and minerals within reach of every pamilya. We believe in everyday wellness — small, consistent habits that build a stronger, mas masiglang buhay.
            </p>
            <p className="mt-4 text-slate-700">
              With affordability, accessibility, and Filipino pride at our core, we craft supplements that support immunity, energy, and daily nourishment.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50 p-8 shadow-inner"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl bg-white p-5 shadow">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
