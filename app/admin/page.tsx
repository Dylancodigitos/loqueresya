'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Producto } from '@/lib/productos';
import { ProductForm } from '@/components/ProductForm';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

export default function AdminPage() {
  const router = useRouter();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const [productoEditando, setProductoEditando] = useState<Producto | null>(null);
  const [creando, setCreando] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Verificar autenticación y cargar productos
    const cargar = async () => {
      try {
        const response = await fetch('/api/productos');
        if (!response.ok) {
          router.push('/login');
          return;
        }
        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError('Error al cargar productos');
      } finally {
        setCargando(false);
      }
    };

    cargar();
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  const handleSaveProducto = async (data: Omit<Producto, 'id'>) => {
    try {
      if (productoEditando) {
        // Actualizar producto
        const response = await fetch(`/api/productos/${productoEditando.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Error al actualizar producto');
        }

        const productoActualizado = await response.json();
        setProductos(productos.map(p => p.id === productoActualizado.id ? productoActualizado : p));
      } else {
        // Crear producto
        const response = await fetch('/api/productos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Error al crear producto');
        }

        const nuevoProducto = await response.json();
        setProductos([...productos, nuevoProducto]);
      }

      setProductoEditando(null);
      setCreando(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  const handleDeleteProducto = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) return;

    try {
      const response = await fetch(`/api/productos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar producto');
      }

      setProductos(productos.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  if (cargando) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header autenticado onLogout={handleLogout} />
        <div className="flex justify-center items-center py-12">
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header autenticado onLogout={handleLogout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
          <Button onClick={() => setCreando(true)}>Agregar producto</Button>
        </div>

        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
            {error}
          </div>
        )}

        {/* Dialog para crear/editar */}
        <Dialog open={creando || !!productoEditando} onOpenChange={(open) => {
          if (!open) {
            setCreando(false);
            setProductoEditando(null);
          }
        }}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {productoEditando ? 'Editar producto' : 'Crear nuevo producto'}
              </DialogTitle>
              <DialogDescription>
                {productoEditando
                  ? 'Actualiza los datos del producto'
                  : 'Completa los campos para crear un nuevo producto'}
              </DialogDescription>
            </DialogHeader>
            <ProductForm
              producto={productoEditando || undefined}
              onSave={handleSaveProducto}
              onCancel={() => {
                setCreando(false);
                setProductoEditando(null);
              }}
            />
          </DialogContent>
        </Dialog>

        {/* Tabla de productos */}
        {productos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No hay productos disponibles</p>
            <Button onClick={() => setCreando(true)}>Crear primer producto</Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {productos.map(producto => (
              <div
                key={producto.id}
                className="bg-white border border-gray-200 rounded-lg p-4 flex gap-4 items-start hover:shadow-md transition"
              >
                <div className="relative w-20 h-20 flex-shrink-0 bg-gray-200 rounded">
                  <Image
                    src={producto.imagenUrl}
                    alt={producto.nombre}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{producto.descripcion}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {producto.categoria}
                    </span>
                    <span className="font-bold text-lg text-blue-700">
                      ${producto.precio.toLocaleString('es-AR')}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setProductoEditando(producto)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteProducto(producto.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
