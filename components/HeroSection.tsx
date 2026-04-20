'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const WORDS = ['un', 'solo', 'lugar'];

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden w-full mt-6 mb-8" suppressHydrationWarning>
      {/* Fondo gradiente azul claro a azul más oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200">
        {/* Luces suaves tipo orbes */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sky-300 rounded-full blur-3xl opacity-25" />
          <div className="absolute top-1/2 -right-20 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-15" />
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-blue-100/80 border border-blue-300 text-blue-900 text-sm px-4 py-1.5 rounded-full mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            suppressHydrationWarning
          >
            <span className="text-sky-600">⚡</span>
            Nuevos ingresos todas las semanas
          </div>

          {/* Titulo */}
          <h1
            className={`text-5xl md:text-7xl font-extrabold text-blue-950 leading-tight mb-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Lo que<br/>
            <span className="text-sky-600">queres</span>
            <br />
            lo tenes <span className="text-blue-900">YA</span>
          </h1>

          {/* Descripcion */}
          <p
            className={`text-blue-800 text-lg max-w-lg mb-10 leading-relaxed transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Venta mayorista y minorista. Encontrá los mejores precios en Parlantes, Auriculares, Tecnologia y mucho más para abastecer tu negocio.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <a
              href="#catalogo"
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-7 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-blue-300/50"
            >
              Ver Catálogo <span aria-hidden="true">&#8594;</span>
            </a>
            <a
              href="https://wa.me/541122826793"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500/90 hover:bg-sky-600 border border-sky-400 text-white font-semibold px-7 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-sky-300/50"
            >
              Atención por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
