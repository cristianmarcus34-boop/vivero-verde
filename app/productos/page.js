'use client'

import { useState } from 'react'
import { productos, categorias } from '../../data/productos'
import TarjetaProducto from '../../components/TarjetaProducto'
import styles from './page.module.css'

export default function Productos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = productos.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === 'Todos' ||
      producto.categoria === categoriaSeleccionada
    const coincideBusqueda =
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  const traducirCategoria = (categoria) => {
    const traducciones = {
      Todos: 'Todos',
      plantas: 'Plantas',
      macetas: 'Macetas',
      tierra: 'Tierra',
      herramientas: 'Herramientas',
      decoracion: 'Decoración',
      cuidados: 'Cuidados',
    }
    return traducciones[categoria] || categoria
  }

  return (
    <>
      <h1 className={styles.pageTitle}>Nuestros Productos</h1>

      <div className={styles.filtersContainer}>
        <input
          type="text"
          placeholder="Buscar productos..."
          className={styles.searchInput}
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar productos"
        />

        <div className={styles.categoryFilters}>
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSeleccionada(categoria)}
              className={
                categoriaSeleccionada === categoria
                  ? styles.categoryButtonActive
                  : styles.categoryButton
              }
            >
              {traducirCategoria(categoria)}
            </button>
          ))}
        </div>
      </div>

      <p className={styles.resultCount}>
        Mostrando {productosFiltrados.length}{' '}
        {productosFiltrados.length !== 1 ? 'productos' : 'producto'}
      </p>

      {productosFiltrados.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>🔍</div>
          <p className={styles.emptyStateTitle}>No se encontraron productos</p>
          <p className={styles.emptyStateText}>Intenta con otros filtros de búsqueda</p>
        </div>
      ) : (
        <div className={styles.productsGrid}>
          {productosFiltrados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </>
  )
}