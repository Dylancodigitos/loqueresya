'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Producto } from '@/lib/productos';
import { ShoppingCart, Minus, Plus, Check, Truck } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ProductoDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const [imagenPrincipal, setImagenPrincipal] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      console.log('[v0] Product detail: No ID available yet');
      return;
    }

    console.log('[v0] Product detail: Loading product with id:', id);
    
    const cargarProducto = async () => {
      try {
        const url = `/api/productos/${id}`;
        console.log('[v0] Fetching from:', url);
        
        const response = await fetch(url);
        console.log('[v0] Fetch response status:', response.status);
        
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Producto no encontrado');
        }
        
        const data = await response.json();
        console.log('[v0] Product loaded successfully:', data.nombre);
        setProducto(data);
        setImagenPrincipal(0);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'No se pudo cargar el producto';
        console.error('[v0] Error cargando producto:', err);
        setError(errorMsg);
      } finally {
        setCargando(false);
      }
    };

    cargarProducto();
  }, [id]);

  if (cargando) {
    return (
      <div className="min-h-screen bg-sky-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500" />
      </div>
    );
  }

  if (error || !producto) {
    return (
      <div className="min-h-screen bg-sky-50">
        <Header />
        <main className="w-full px-4 sm:px-8 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xl text-red-600 mb-4">{error || 'Producto no encontrado'}</p>
            <a href="/" className="text-sky-600 hover:text-sky-700">Volver al catálogo</a>
          </div>
        </main>
      </div>
    );
  }

  const esMayorista = cantidad >= producto.cantidadMinimaMayorista;
  const precioActual = esMayorista ? producto.precioMayorista : producto.precio;
  const precioTotal = precioActual * cantidad;
  const imagenes = producto.imagenesAdicionales || [producto.imagenUrl];

  const incrementarCantidad = () => setCantidad(c => c + 1);
  const decrementarCantidad = () => setCantidad(c => (c > 1 ? c - 1 : 1));

  return (
    <div className="min-h-screen bg-sky-50">
      <Header />
      <WhatsAppButton phoneNumber="541122826793" />

      <main className="w-full px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-blue-600 mb-6">
            <a href="/" className="hover:text-blue-800">Inicio</a> / {producto.categoria}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Galería de imágenes */}
            <div>
              <div className="mb-4 rounded-xl overflow-hidden bg-white shadow-sm">
                <div className="relative w-full flex items-center justify-center" style={{ aspectRatio: '1 / 1', backgroundColor: '#f0f9ff' }}>
                  <Image
                    src={imagenes[imagenPrincipal]}
                    alt={producto.nombre}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Miniaturas */}
              {imagenes.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {imagenes.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImagenPrincipal(idx)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center ${
                        imagenPrincipal === idx ? 'border-sky-600' : 'border-gray-200'
                      }`}
                      style={{ aspectRatio: '1 / 1', backgroundColor: '#f0f9ff' }}
                    >
                      <Image
                        src={img}
                        alt={`${producto.nombre} ${idx + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Información del producto */}
            <div>
              <p className="text-sm font-semibold text-sky-600 mb-2">{producto.categoria}</p>
              <h1 className="text-4xl font-bold text-blue-950 mb-2">{producto.nombre}</h1>

              {/* Precio */}
              <div className="mb-6">
                {esMayorista && producto.precio > producto.precioMayorista && (
                  <p className="text-lg text-gray-400 line-through mb-1">
                    ${producto.precio.toLocaleString('es-AR')} /unidad
                  </p>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-950">
                    ${precioActual.toLocaleString('es-AR')}
                  </span>
                  <span className="text-gray-600">/unidad</span>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-gray-700 leading-relaxed mb-8">{producto.descripcion}</p>

              {/* Stock */}
              <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-sky-200">
                <p className="text-sm text-blue-700">
                  Stock disponible: <span className="font-bold">{producto.stock} unidades</span>
                </p>
              </div>

              {/* Selector de cantidad */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-blue-950 mb-3">Cantidad</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={decrementarCantidad}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={20} className="text-gray-600" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={cantidad}
                      onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-0 text-blue-950 font-semibold"
                    />
                    <button
                      onClick={incrementarCantidad}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={20} className="text-gray-600" />
                    </button>
                  </div>
                  <span className="text-2xl font-bold text-blue-950">
                    = ${precioTotal.toLocaleString('es-AR')}
                  </span>
                </div>

                {/* Aviso de precio mayorista */}
                {cantidad >= producto.cantidadMinimaMayorista && cantidad > 1 && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <Check size={18} className="text-green-600" />
                    <span className="text-sm text-green-700">
                      Precio mayorista aplicado ({Math.round(((producto.precio - producto.precioMayorista) / producto.precio) * 100)}% de descuento)
                    </span>
                  </div>
                )}
              </div>

              {/* Botón agregar al carrito */}
              <Button
                onClick={() => alert(`Agregado ${cantidad} ${producto.nombre} al carrito`)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl mb-6 flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart size={20} />
                Agregar al Carrito
              </Button>

              {/* Beneficios */}
              <div className="space-y-3 p-4 bg-white rounded-lg border border-sky-200">
                <div className="flex items-center gap-3">
                  <Truck size={20} className="text-sky-600" />
                  <span className="text-sm text-gray-700">Envíos a todo el país</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-sky-600" />
                  <span className="text-sm text-gray-700">Garantía Lo Queres Lo Tenes YA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Productos relacionados */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Productos Relacionados</h2>
            <p className="text-gray-600">Cargando productos relacionados...</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-950 text-blue-100 py-12 px-4 sm:px-8 lg:px-12 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-3">Sobre Nosotros</h3>
              <p className="text-sm text-blue-200">Proveedor de Productos Importados al Mejor Precio</p>
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
