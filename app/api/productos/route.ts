import { NextRequest, NextResponse } from 'next/server';
import { getProductos, createProducto, CATEGORIAS, Producto } from '@/lib/productos';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categoria = searchParams.get('categoria');
    const busqueda = searchParams.get('busqueda')?.toLowerCase() || '';

    let productos = getProductos();

    if (categoria && CATEGORIAS.includes(categoria)) {
      productos = productos.filter(p => p.categoria === categoria);
    }

    if (busqueda) {
      productos = productos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda) ||
        p.descripcion.toLowerCase().includes(busqueda)
      );
    }

    return NextResponse.json(productos);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, descripcion, precio, categoria, imagenUrl } = body;

    if (!nombre || !descripcion || typeof precio !== 'number' || !categoria || !imagenUrl) {
      return NextResponse.json(
        { error: 'Campos requeridos incompletos' },
        { status: 400 }
      );
    }

    const nuevoProducto = createProducto({
      nombre,
      descripcion,
      precio,
      categoria,
      imagenUrl,
    });

    return NextResponse.json(nuevoProducto, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al crear producto' },
      { status: 500 }
    );
  }
}
