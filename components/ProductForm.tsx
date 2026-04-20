'use client';

import { useState } from 'react';
import { Producto, CATEGORIAS } from '@/lib/productos';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

interface ProductFormProps {
  producto?: Producto;
  onSave: (data: Omit<Producto, 'id'>) => Promise<void>;
  onCancel: () => void;
}

export function ProductForm({ producto, onSave, onCancel }: ProductFormProps) {
  const [nombre, setNombre] = useState(producto?.nombre || '');
  const [descripcion, setDescripcion] = useState(producto?.descripcion || '');
  const [precio, setPrecio] = useState(producto?.precio.toString() || '');
  const [categoria, setCategoria] = useState(producto?.categoria || '');
  const [imagenUrl, setImagenUrl] = useState(producto?.imagenUrl || '');
  const [archivo, setArchivo] = useState<File | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [subiendo, setSubiendo] = useState(false);

  const handleImagenChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSubiendo(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error al subir imagen');
      }

      const data = await response.json();
      setImagenUrl(data.url);
      setArchivo(null);
    } catch (err) {
      setError('Error al subir la imagen');
    } finally {
      setSubiendo(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    try {
      if (!nombre || !descripcion || !precio || !categoria || !imagenUrl) {
        setError('Todos los campos son requeridos');
        return;
      }

      await onSave({
        nombre,
        descripcion,
        precio: parseFloat(precio),
        categoria,
        imagenUrl,
      });
    } catch (err) {
      setError('Error al guardar el producto');
    } finally {
      setCargando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre del producto
        </label>
        <Input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={cargando}
          required
        />
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <Textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          disabled={cargando}
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
            Precio
          </label>
          <Input
            id="precio"
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            disabled={cargando}
            required
          />
        </div>

        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <Select value={categoria} onValueChange={setCategoria} disabled={cargando}>
            <SelectTrigger id="categoria">
              <SelectValue placeholder="Seleccionar categoría" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIAS.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="imagen" className="block text-sm font-medium text-gray-700 mb-1">
          Foto del producto
        </label>

        {imagenUrl && (
          <div className="mb-4 relative w-full h-40 bg-gray-200 rounded">
            <Image
              src={imagenUrl}
              alt={nombre || 'Producto'}
              fill
              className="object-cover rounded"
            />
          </div>
        )}

        <Input
          id="imagen"
          type="file"
          accept="image/*"
          onChange={handleImagenChange}
          disabled={cargando || subiendo}
        />
        {subiendo && <p className="text-sm text-gray-500 mt-1">Subiendo imagen...</p>}
      </div>

      <div className="flex gap-2">
        <Button
          type="submit"
          disabled={cargando || subiendo}
          className="flex-1"
        >
          {cargando ? 'Guardando...' : 'Guardar producto'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={cargando}
          className="flex-1"
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
}
