import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lo Queres Lo Tenes YA',
  description: 'Lo Queres Ya',
  generator: 'YA',
  icons: {
    icon: [
      {
        url: '/imagesproductos/ya.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/imagesproductos/ya.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/imagesproductos/ya.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* --- BANNER DE PUBLICIDAD --- */}
        <div className="w-full bg-black text-white text-center py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest border-b border-zinc-800">
           🔥 Llevando 3 productos o más tenés un <span className="text-yellow-400">5% OFF</span> en tu total 🔥
        </div>
        {/* ---------------------------- */}
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}