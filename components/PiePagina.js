import Link from 'next/link'
import styles from './PiePagina.module.css'

export default function PiePagina() {
  return (
    <footer className={styles.footer}>
      {/* BANNER INFORMATIVO - SITIO WEB TRADICIONAL */}
      <div className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              <span className="font-bold">Sitio Web Tradicional</span>
              <span className="hidden sm:inline text-blue-200">|</span>
              <span className="text-blue-100">Estático · Sin DB</span>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                HTML + CSS + JS
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                Next.js 16
              </span>
              <span className="bg-yellow-300/30 px-3 py-1 rounded-full text-xs font-semibold text-yellow-100">
                📦 Arrays locales
              </span>
              <span className="text-green-300 text-xs">
                ✓ 100% Funcional
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENIDO ORIGINAL DEL FOOTER */}
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerTitle}>
              <span>🌿</span> Vivero Verde
            </h3>
            <p className={styles.footerText}>
              Tu vivero de confianza para plantas y accesorios de jardinería.
            </p>
          </div>
          
          <div>
            <h4 className={styles.footerHeading}>Enlaces rápidos</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/" className={styles.footerLink}>Inicio</Link></li>
              <li><Link href="/productos" className={styles.footerLink}>Productos</Link></li>
              <li><Link href="/contacto" className={styles.footerLink}>Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.footerHeading}>Síguenos</h4>
            <div className={styles.socialLinks}>
              <span className={styles.socialLink}>📱</span>
              <span className={styles.socialLink}>📷</span>
              <span className={styles.socialLink}>🐦</span>
              <span className={styles.socialLink}>📘</span>
            </div>
            <p className={styles.footerText} style={{ marginTop: '0.75rem' }}>
              🌱 Cultivando naturaleza desde 2024
            </p>
          </div>
        </div>
        
        <hr className={styles.footerDivider} />
        
        <div className={styles.footerBottom}>
          <p>© 2024 Vivero Verde. Todos los derechos reservados.</p>
          <p>desarrollo agencia digital powa</p>
        </div>
      </div>
    </footer>
  )
}