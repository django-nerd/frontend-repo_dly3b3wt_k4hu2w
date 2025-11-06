import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import BlogCommunityContact from './components/BlogCommunityContact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-emerald-700">Pinasustansya</span>
          </a>
          <nav className="hidden gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#products" className="hover:text-emerald-700">Products</a>
            <a href="#blog" className="hover:text-emerald-700">Health Tips</a>
            <a href="#community" className="hover:text-emerald-700">Community</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <a href="#products" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 md:inline-block">
            Shop Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Products />
        <BlogCommunityContact />
      </main>

      <footer className="border-t border-slate-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Pinasustansya — Sustansya para sa bawat Pamilyang Pilipino.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
