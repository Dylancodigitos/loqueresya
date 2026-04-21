'use server';

import { cookies } from 'next/headers';

export interface AuthSession {
  token: string;
  usuario: string;
  timestamp: number;
}

const SESSION_COOKIE_NAME = 'auth_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 horas

// Credenciales hardcodeadas (en producción usar variables de entorno)
const CREDENCIALES = {
  usuario: process.env.ADMIN_USER || 'admin',
  password: process.env.ADMIN_PASSWORD || 'dylan22',
};

export async function verificarCredenciales(usuario: string, password: string): Promise<boolean> {
  return usuario === CREDENCIALES.usuario && password === CREDENCIALES.password;
}

export async function crearSession(usuario: string): Promise<string> {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const cookieStore = await cookies();
  
  const session: AuthSession = {
    token,
    usuario,
    timestamp: Date.now(),
  };
  
  cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: SESSION_DURATION,
  });
  
  return token;
}

export async function obtenerSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  
  if (!sessionCookie) return null;
  
  try {
    const session: AuthSession = JSON.parse(sessionCookie.value);
    
    // Verificar si la sesión ha expirado
    if (Date.now() - session.timestamp > SESSION_DURATION) {
      await destruirSession();
      return null;
    }
    
    return session;
  } catch {
    return null;
  }
}

export async function destruirSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function verificarAutenticacion(): Promise<boolean> {
  const session = await obtenerSession();
  return session !== null;
}
