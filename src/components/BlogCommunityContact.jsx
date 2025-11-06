import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, MessageCircle } from 'lucide-react';

const tips = [
  {
    title: 'Daily Nutrisyon 101',
    desc: 'Simpleng gabay sa tamang pagkain at pag-inom ng supplements araw-araw.',
  },
  {
    title: 'Lakas Resistensya',
    desc: 'Paano nakakatulong ang Vitamin C, Zinc, at Vitamin D sa immune support.',
  },
  {
    title: 'Wellness Habits',
    desc: 'Maliit na hakbang tulad ng tulog, tubig, at galaw para sa mas masiglang buhay.',
  },
];

const testimonials = [
  {
    name: 'The Dela Cruz Family',
    quote: 'Mas tipid pero epektibo! Naging routine na namin ang Pinasustansya araw-araw.'
  },
  {
    name: 'Aling Nena, Cebu',
    quote: 'Accessible sa botika at sulit sa budget. Ramdam ang dagdag-lakas.'
  },
];

const BlogCommunityContact = () => {
  return (
    <section className="bg-white">
      {/* Health Tips / Blog */}
      <div id="blog" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-emerald-600" />
          <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">Health Tips & Blog</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tips.map((t, idx) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{t.desc}</p>
              <a href="#" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">Read more →</a>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Community Impact */}
      <div id="community" className="bg-gradient-to-br from-emerald-50 via-amber-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-6 w-6 text-amber-600" />
            <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">Community Impact</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 shadow">
                <p className="text-slate-700">“{t.quote}”</p>
                <p className="mt-3 text-sm font-semibold text-slate-900">— {t.name}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-white p-6 shadow">
              <p className="text-slate-700">
                We partner with barangays, schools, and local health workers to bring nutrition education and supplement access to communities nationwide.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700">
                <li>Outreach caravans and libreng konsultasyon</li>
                <li>Nutrition education for parents and students</li>
                <li>Partnerships with LGUs and NGOs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <MessageCircle className="h-6 w-6 text-orange-600" />
          <h2 className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">Contact Us</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white p-6 shadow"
          >
            <div className="grid gap-4">
              <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" required />
              <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" required />
              <textarea placeholder="Your Message" rows={5} className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" required />
              <button className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">Send Message</button>
            </div>
          </form>
          <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-6 shadow">
            <p className="text-slate-700">For partnerships and inquiries:</p>
            <p className="mt-1 font-semibold text-slate-900">hello@pinasustansya.ph</p>
            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-900">Follow us</p>
              <div className="mt-2 flex gap-3">
                <a href="#" className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">Facebook</a>
                <a href="#" className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">Instagram</a>
                <a href="#" className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCommunityContact;
