import { NextRequest, NextResponse } from 'next/server';
import { verificarCredenciales, crearSession } from '@/lib/auth-server';

export async function POST(request: NextRequest) {
  try {
    const { usuario, password } = await request.json();

    if (!usuario || !password) {
      return NextResponse.json(
        { error: 'Usuario y contraseña requeridos' },
        { status: 400 }
      );
    }

    const credencialesValidas = await verificarCredenciales(usuario, password);

    if (!credencialesValidas) {
      return NextResponse.json(
        { error: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    await crearSession(usuario);

    return NextResponse.json(
      { success: true, mensaje: 'Sesión iniciada' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al iniciar sesión' },
      { status: 500 }
    );
  }
}
