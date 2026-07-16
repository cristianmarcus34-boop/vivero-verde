import './globals.css'
import BarraNavegacion from '../components/BarraNavegacion'
import PiePagina from '../components/PiePagina'

export const metadata = {
  title: 'Vivero Verde - Plantas y Jardinería',
  description: 'Encuentra las mejores plantas, macetas y accesorios para tu jardín',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌿</text></svg>',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <BarraNavegacion />
        <main className="grow container mx-auto px-4 py-8">
          {children}
        </main>
        <PiePagina />
      </body>
    </html>
  )
}