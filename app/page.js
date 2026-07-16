import { productos } from '../data/productos'
import TarjetaProducto from '../components/TarjetaProducto'
import Link from 'next/link'
import styles from './page.module.css'

export default function Inicio() {
  const destacados = productos.slice(0, 4)

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>🌿</div>
          <h1 className={styles.heroTitle}>
            Bienvenido a <span>Vivero Verde</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Encuentra las mejores plantas, macetas y accesorios para crear tu jardín perfecto
          </p>
          <div className={styles.heroButtons}>
            <Link href="/productos">
              <button className={styles.btnPrimary}>🌱 Ver Productos</button>
            </Link>
            <Link href="/contacto">
              <button className={styles.btnSecondary}>📞 Contacto</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>🌱 Productos Destacados</h2>
            <p className={styles.sectionSubtitle}>Lo más popular de nuestro vivero</p>
          </div>
          <Link href="/productos" className={styles.viewAll}>
            Ver todos <span>→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destacados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🌱</div>
            <h3 className={styles.benefitTitle}>Plantas Saludables</h3>
            <p className={styles.benefitDesc}>Cuidamos cada planta para que llegue en perfectas condiciones</p>
            <div className={styles.benefitLine}></div>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>🚚</div>
            <h3 className={styles.benefitTitle}>Envío Rápido</h3>
            <p className={styles.benefitDesc}>Entregas a domicilio en 24-48 horas con el mayor cuidado</p>
            <div className={styles.benefitLine}></div>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>💚</div>
            <h3 className={styles.benefitTitle}>Asesoramiento</h3>
            <p className={styles.benefitDesc}>Te ayudamos a elegir las mejores plantas para tu espacio</p>
            <div className={styles.benefitLine}></div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Plantas</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Macetas</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>Clientes felices</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>4.9⭐</div>
            <div className={styles.statLabel}>Valoración</div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <h2 className={styles.testimonialsTitle}>Lo que dicen nuestros clientes</h2>
          <p className={styles.testimonialsSubtitle}>Experiencias reales de personas que confían en nosotros</p>
        </div>
        
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonialText}>"Las plantas llegaron en perfecto estado. La Monstera es hermosa."</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>👩</div>
              <div>
                <p className={styles.testimonialName}>María G.</p>
                <p className={styles.testimonialDate}>Cliente desde 2024</p>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonialText}>"Excelente atención y asesoramiento. Me ayudaron a elegir las plantas perfectas."</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>👨</div>
              <div>
                <p className={styles.testimonialName}>Carlos R.</p>
                <p className={styles.testimonialDate}>Cliente desde 2023</p>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
            <p className={styles.testimonialText}>"El envío fue súper rápido y las macetas son de muy buena calidad."</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>👩</div>
              <div>
                <p className={styles.testimonialName}>Laura F.</p>
                <p className={styles.testimonialDate}>Cliente desde 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaIcon}>🌿</div>
          <h2 className={styles.ctaTitle}>¿Listo para empezar tu jardín?</h2>
          <p className={styles.ctaText}>
            Descubre nuestra colección de plantas, macetas y accesorios para crear el espacio verde que siempre soñaste
          </p>
          <Link href="/productos">
            <button className={styles.ctaButton}>🌱 Explorar Productos</button>
          </Link>
        </div>
      </section>
    </>
  )
}