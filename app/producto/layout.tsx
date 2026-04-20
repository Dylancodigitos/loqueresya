import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detalle del Producto | Lo Queres Lo Tenes YA',
  description: 'Ver detalles, precios y opciones de compra de nuestros productos de construcción.',
};

export default function ProductoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
