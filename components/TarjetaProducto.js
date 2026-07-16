'use client'

import styles from './TarjetaProducto.module.css'

export default function TarjetaProducto({ producto }) {
  const obtenerIcono = (categoria) => {
    const iconos = {
      plantas: '🌿',
      macetas: '🏺',
      tierra: '🪴',
      herramientas: '🔧',
      decoracion: '✨',
      cuidados: '💧'
    }
    return iconos[categoria] || '🌱'
  }

  const obtenerBadge = (stock) => {
    if (stock > 10) {
      return { text: '✅ En stock', className: styles.badgeInStock }
    } else if (stock > 0) {
      return { text: '🟡 Últimas unidades', className: styles.badgeLowStock }
    } else {
      return { text: '❌ Agotado', className: styles.badgeOutOfStock }
    }
  }

  const badge = obtenerBadge(producto.stock)

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <span className={styles.cardImageContent}>
          {obtenerIcono(producto.categoria)}
        </span>
        <span className={`${styles.badge} ${badge.className}`}>
          {badge.text}
        </span>
      </div>
      
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{producto.nombre}</h3>
        <p className={styles.cardDescription}>{producto.descripcion}</p>
        
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>${producto.precio.toFixed(2)}</span>
          <span className={styles.cardStock}>
            {producto.stock > 0 ? `${producto.stock} disponibles` : 'Sin stock'}
          </span>
        </div>
        
        <button 
          className={
            producto.stock > 0
              ? styles.cardButtonAvailable
              : styles.cardButtonUnavailable
          }
          disabled={producto.stock === 0}
        >
          {producto.stock > 0 ? '🛒 Agregar al Carrito' : 'Sin Stock'}
        </button>
      </div>
    </div>
  )
}