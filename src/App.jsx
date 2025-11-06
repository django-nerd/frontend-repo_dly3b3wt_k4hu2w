import React from 'react';
import ShopHero from './components/ShopHero';
import BenefitsBar from './components/BenefitsBar';
import VitaminsShop from './components/VitaminsShop';
import ShopFAQ from './components/ShopFAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-emerald-700">Pinasustansya</span>
          </a>
          <nav className="hidden gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#shop" className="hover:text-emerald-700">Shop</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>
          <a href="#shop" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 md:inline-block">
            View Products
          </a>
        </div>
      </header>

      <main>
        <ShopHero />
        <div className="-mt-8 pb-8">
          <BenefitsBar />
        </div>
        <VitaminsShop />
        <div id="faq">
          <ShopFAQ />
        </div>
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
