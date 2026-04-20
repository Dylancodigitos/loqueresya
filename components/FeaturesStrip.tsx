'use client';

import { Truck, ShieldCheck, Zap, Headphones } from 'lucide-react';

const FEATURES = [
  {
    icon: Truck,
    title: 'Envios a Todo el País',
    desc: 'Despachamos en 24hs',
  },
  {
    icon: ShieldCheck,
    title: 'Garantía',
    desc: 'Compra 100% segura',
  },
  {
    icon: Zap,
    title: 'Precios Mayoristas',
    desc: 'Empeza a Emprender',
  },
  {
    icon: Headphones,
    title: 'Soporte Dedicado',
    desc: 'Atención personalizada',
  },
];

export function FeaturesStrip() {
  return (
    <div className="w-full bg-gradient-to-r from-sky-50 to-blue-50 py-8 px-4 sm:px-8 lg:px-12 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-3 bg-white border border-sky-200 rounded-xl px-4 py-4 shadow-sm hover:shadow-md transition-all hover:border-sky-400"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center">
              <Icon size={20} className="text-blue-900" />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-950">{title}</p>
              <p className="text-xs text-blue-700">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
