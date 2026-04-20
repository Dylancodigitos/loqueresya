import { NextResponse } from 'next/server';
import { destruirSession } from '@/lib/auth-server';

export async function POST() {
  try {
    await destruirSession();
    return NextResponse.json(
      { success: true, mensaje: 'Sesión cerrada' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al cerrar sesión' },
      { status: 500 }
    );
  }
}
