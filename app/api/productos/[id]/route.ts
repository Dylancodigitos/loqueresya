import { NextRequest, NextResponse } from 'next/server';
import { getProductoById, updateProducto, deleteProducto } from '@/lib/productos';
import { verificarAutenticacion } from '@/lib/auth-server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    
    console.log('[v0] API GET /productos - id:', id);
    
    const producto = getProductoById(id);

    if (!producto) {
      console.log('[v0] API GET /productos - producto no encontrado para id:', id);
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    console.log('[v0] API GET /productos - producto encontrado:', producto.nombre);
    return NextResponse.json(producto);
  } catch (error) {
    console.error('[v0] Error en GET /api/productos/[id]:', error);
    return NextResponse.json(
      { error: 'Error al obtener producto' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const autenticado = await verificarAutenticacion();
    if (!autenticado) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const { id } = resolvedParams;
    const body = await request.json();
    const { nombre, descripcion, precio, categoria, imagenUrl } = body;

    const productoActualizado = updateProducto(id, {
      ...(nombre && { nombre }),
      ...(descripcion && { descripcion }),
      ...(typeof precio === 'number' && { precio }),
      ...(categoria && { categoria }),
      ...(imagenUrl && { imagenUrl }),
    });

    if (!productoActualizado) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(productoActualizado);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al actualizar producto' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const autenticado = await verificarAutenticacion();
    if (!autenticado) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const { id } = resolvedParams;
    const eliminado = deleteProducto(id);

    if (!eliminado) {
      return NextResponse.json(
        { error: 'Producto no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al eliminar producto' },
      { status: 500 }
    );
  }
}
