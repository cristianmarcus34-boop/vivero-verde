'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './BarraNavegacion.module.css'

export default function BarraNavegacion() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span>🌿</span> Vivero Verde
          </Link>

          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Inicio</Link>
            <Link href="/productos" className={styles.navLink}>Productos</Link>
            <Link href="/contacto" className={styles.navLink}>Contacto</Link>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú"
          >
            ☰
          </button>
        </div>

        {menuAbierto && (
          <div className={styles.mobileMenu}>
            <Link href="/" className={styles.mobileLink}>Inicio</Link>
            <Link href="/productos" className={styles.mobileLink}>Productos</Link>
            <Link href="/contacto" className={styles.mobileLink}>Contacto</Link>
          </div>
        )}
      </div>
    </nav>
  )
}