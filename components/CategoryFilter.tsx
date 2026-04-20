'use client';

import { CATEGORIAS } from '@/lib/productos';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categoriaActiva: string | null;
  onCategoriaChange: (categoria: string | null) => void;
}

export function CategoryFilter({ categoriaActiva, onCategoriaChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={categoriaActiva === null ? 'default' : 'outline'}
        onClick={() => onCategoriaChange(null)}
        size="sm"
        className={categoriaActiva === null ? 'bg-blue-900 text-white hover:bg-blue-950' : 'border-sky-300 text-blue-900 hover:bg-sky-50'}
      >
        Todas
      </Button>
      {CATEGORIAS.map(categoria => (
        <Button
          key={categoria}
          variant={categoriaActiva === categoria ? 'default' : 'outline'}
          onClick={() => onCategoriaChange(categoria)}
          size="sm"
          className={categoriaActiva === categoria ? 'bg-blue-900 text-white hover:bg-blue-950' : 'border-sky-300 text-blue-900 hover:bg-sky-50'}
        >
          {categoria}
        </Button>
      ))}
    </div>
  );
}
