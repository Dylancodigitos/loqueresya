'use client';

import Image from 'next/image';

const CATEGORIAS_VISUALES = [
  {
    nombre: 'Parlantes',
    imagen: './imagesproductos/categoriaparlante.png',
  },
  {
    nombre: 'Auriculares',
    imagen: './imagesproductos/categoriaauricular.png',
  },
  {
    nombre: 'Tecnologia',
    imagen: './imagesproductos/categoriatecno.png',
  },
  {
    nombre: 'Salud Y Belleza',
    imagen: './imagesproductos/categoriabelleza.png',
  },
  {
    nombre: 'Hogar',
    imagen: './imagesproductos/categoriahogar.png',
  },
  {
    nombre: 'Varios',
    imagen: './imagesproductos/ventilador.jpg',
  },
  /*{
    nombre: 'Usados',
    imagen: 'https://images.unsplash.com/photo-1550745167-84a228b16994?w=400&h=400&fit=crop',
  },*/
  
];

interface CategoryGridProps {
  onCategoriaClick: (categoria: string) => void;
}

export function CategoryGrid({ onCategoriaClick }: CategoryGridProps) {
  return (
    <section id="categorias" className="w-full bg-white py-12 px-4 sm:px-8 lg:px-12 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-950">Comprá por Categoría</h2>
            <p className="text-blue-700 text-sm mt-1">Explora nuestro amplio catálogo de productos.</p>
          </div>
          <button
            onClick={() => onCategoriaClick('')}
            className="text-sky-600 hover:text-sky-700 text-sm font-semibold flex items-center gap-1 transition-colors"
          >
            Ver todas <span aria-hidden="true">&#8594;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIAS_VISUALES.map((cat, index) => (
            <div
              key={cat.nombre}
              onClick={() => onCategoriaClick(cat.nombre)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onCategoriaClick(cat.nombre)}
              className="relative overflow-hidden rounded-xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ minHeight: '224px', height: '224px' }}
              aria-label={`Ver productos de ${cat.nombre}`}
            >
              <Image
                src={cat.imagen}
                alt={cat.nombre}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-white font-bold text-sm md:text-base leading-tight">
                  {cat.nombre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
