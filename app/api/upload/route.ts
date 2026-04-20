import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { verificarAutenticacion } from '@/lib/auth-server';

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación
    const autenticado = await verificarAutenticacion();
    if (!autenticado) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validar que sea una imagen
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'File must be an image' },
        { status: 400 }
      );
    }

    // Generar nombre único para la imagen
    const timestamp = Date.now();
    const filename = `productos/${timestamp}-${file.name}`;

    // Subir a Vercel Blob
    const blob = await put(filename, file, {
      access: 'private',
    });

    return NextResponse.json({
      url: blob.url,
      filename: blob.pathname,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}
