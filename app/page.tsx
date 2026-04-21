'use client';

import { useEffect, useRef, useState } from 'react';
import { Producto } from '@/lib/productos';
import { ProductCard } from '@/components/ProductCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesStrip } from '@/components/FeaturesStrip';
import { CategoryGrid } from '@/components/CategoryGrid';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
  const [categoriaActiva, setCategoriaActiva] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  const catalogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const response = await fetch('/api/productos');
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error cargando productos:', error);
      } finally {
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  useEffect(() => {
    let filtrados = productos;
    if (categoriaActiva) {
      filtrados = filtrados.filter(p => p.categoria === categoriaActiva);
    }
    if (busqueda) {
      filtrados = filtrados.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }
    setProductosFiltrados(filtrados);
  }, [productos, categoriaActiva, busqueda]);

  const handleCategoriaClick = (categoria: string) => {
    setCategoriaActiva(categoria || null);
    catalogoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />
      <WhatsAppButton phoneNumber="541122826793" />

      {/* Hero animado */}
      <HeroSection />

      {/* Franja de features */}
      <FeaturesStrip />

      {/* Grid visual de categorias */}
      <CategoryGrid onCategoriaClick={handleCategoriaClick} />

      {/* --- BANNER DE PUBLICIDAD (DEBAJO DE CATEGORIAS) --- */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-8 mb-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl p-6 shadow-lg border border-sky-200 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white">
          <div className="z-10 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-black uppercase tracking-tighter italic">🔥 ¡PROMO IMPERDIBLE! 🔥</h3>
            <p className="text-lg font-medium opacity-90">Llevando <span className="font-bold border-b-2 border-white">3 productos o más</span> tenés un</p>
          </div>
          <div className="z-10 bg-white text-blue-600 px-6 py-3 rounded-xl font-black text-4xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform cursor-default">
            5% OFF
          </div>
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-200 opacity-20 rounded-full -ml-10 -mb-10"></div>
        </div>
      </div>

      {/* Catalogo de productos */}
      <main
        id="catalogo"
        ref={catalogoRef}
        className="w-full px-4 sm:px-8 lg:px-12 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-950">Productos Destacados</h2>
              <p className="text-blue-600 text-sm mt-1">Los más elegidos por nuestros clientes.</p>
            </div>
          </div>

          {/* Busqueda y filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full sm:w-80 h-11 border-sky-200 text-blue-950"
            />
            <CategoryFilter
              categoriaActiva={categoriaActiva}
              onCategoriaChange={setCategoriaActiva}
            />
          </div>

          {/* Grid de productos */}
          {cargando ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500" />
            </div>
          ) : productosFiltrados.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-xl text-blue-900 mb-2">No hay productos disponibles</p>
              <p className="text-sm text-blue-600">Intenta cambiar los filtros o la búsqueda</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-blue-700 mb-6">
                Mostrando {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productosFiltrados.map((producto, index) => (
                  <ProductCard key={producto.id} producto={producto} isFirst={index === 0} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-950 text-blue-100 py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3">Sobre Nosotros</h3>
              <p className="text-sm leading-relaxed text-blue-200">Proveedor de Productos Importados al Mejor Precio</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Contacto</h3>
              <p className="text-sm text-blue-200">Tel: +54 11 2282 6793</p>
              <p className="text-sm text-blue-200">Email: loqueresya@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-3">Seguinos</h3>
              <p className="text-sm text-blue-200">Facebook | Instagram | Tiktok</p>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Lo Queres Lo Tenes YA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}