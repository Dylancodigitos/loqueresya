'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Producto } from '@/lib/productos';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  producto: Producto;
  isFirst?: boolean;
}

export function ProductCard({ producto, isFirst = false }: ProductCardProps) {
  return (
    <Link href={`/producto/${producto.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group border border-gray-300 cursor-pointer bg-white">
        <CardContent className="p-0 flex flex-col h-full">
          {/* Título */}
          <div className="px-4 sm:px-6 py-4 text-center">
            <h3 className="font-bold text-sm sm:text-base text-gray-800 line-clamp-2">
              {producto.nombre}
            </h3>
          </div>

          {/* Imagen grande con fondo blanco */}
          <div className="relative w-full bg-white overflow-hidden flex items-center justify-center flex-1" style={{ minHeight: '240px', maxHeight: '320px' }}>
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
              <Image
                src={producto.imagenUrl}
                alt={producto.nombre}
                fill
                loading={isFirst ? "eager" : "lazy"}
                className="object-contain"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 33vw"
              />
            </div>
          </div>

          {/* Precios y carrito */}
          <div className="px-4 sm:px-6 py-4 flex items-end justify-between gap-2">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-3 text-sm">
                {/* Precio Minorista */}
                <div>
                  <div className="text-xs font-semibold text-gray-600 mb-1">Minorista</div>
                  <div className="text-lg sm:text-xl font-bold text-gray-800">
                    ${producto.precio.toLocaleString('es-AR')}
                  </div>
                </div>
                {/* Precio Mayorista */}
                <div>
                  <div className="text-xs font-semibold text-green-600 mb-1">Mayorista</div>
                  <div className="text-lg sm:text-xl font-bold text-green-700">
                    ${producto.precioMayorista.toLocaleString('es-AR')}
                  </div>
                  <div className="text-xs text-green-600">(3+ unidades)</div>
                </div>
              </div>
            </div>
            <button 
              className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full transition-colors duration-200 flex-shrink-0" 
              title="Ver detalle"
              onClick={(e) => e.preventDefault()}
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
