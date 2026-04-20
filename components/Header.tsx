'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';

interface HeaderProps {
  autenticado?: boolean;
  onLogout?: () => void;
}

export function Header({ autenticado = false, onLogout }: HeaderProps) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-blue-900 hover:text-blue-700 transition">
            <span className="text-3xl">🛒</span>
            <span>Lo Queres<br/>Lo Tenes YA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-blue-700 hover:text-blue-900 transition font-medium flex items-center gap-1">
              <Home size={18} />
              Catálogo
            </Link>
            {autenticado ? (
              <>
                <Link href="/admin" className="text-blue-700 hover:text-blue-900 transition font-medium">
                  Administración
                </Link>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition font-medium text-sm"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link href="/login">
                <Button size="sm" className="bg-blue-900 text-white hover:bg-blue-800 font-semibold">
                  Ingresar
                </Button>
              </Link>
            )}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="text-blue-900"
            >
              {menuAbierto ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuAbierto && (
          <div suppressHydrationWarning className="md:hidden pb-4 flex flex-col gap-3 bg-sky-50 border-t border-sky-200">
            <Link href="/" className="text-blue-700 hover:text-blue-900 block py-2 px-2 transition">
              Catálogo
            </Link>
            {autenticado ? (
              <>
                <Link href="/admin" className="text-blue-700 hover:text-blue-900 block py-2 px-2 transition">
                  Administración
                </Link>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition font-medium text-sm w-full"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link href="/login" className="w-full">
                <Button size="sm" className="w-full bg-blue-900 text-white hover:bg-blue-800 font-semibold">
                  Ingresar
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
