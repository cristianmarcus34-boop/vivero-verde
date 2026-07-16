'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [errores, setErrores] = useState({})

  const validarFormulario = () => {
    const nuevosErrores = {}
    
    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    } else if (formulario.nombre.length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }
    
    if (!formulario.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
      nuevosErrores.email = 'Ingresa un email válido'
    }
    
    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio'
    } else if (formulario.mensaje.length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }
    
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validarFormulario()) {
      return
    }
    
    setCargando(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setEnviado(true)
    setCargando(false)
    setFormulario({ nombre: '', email: '', mensaje: '' })
    setErrores({})
    
    setTimeout(() => {
      setEnviado(false)
    }, 4000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
    if (errores[name]) {
      setErrores({ ...errores, [name]: '' })
    }
  }

  return (
    <div className={styles.contactPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>📞 Contacto</h1>
        <p className={styles.pageSubtitle}>
          Estamos aquí para ayudarte. Cuéntanos qué necesitas y te responderemos lo antes posible.
        </p>
        <div className={styles.titleUnderline}></div>
      </div>

      <div className={styles.contactGrid}>
        {/* Información de contacto */}
        <div>
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>📍 Visítanos</h2>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🌿</span>
                <div>
                  <p className={styles.infoLabel}>Vivero Verde</p>
                  <p className={styles.infoValue}>Tu vivero de confianza</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <p className={styles.infoLabel}>Dirección</p>
                  <p className={styles.infoValue}>Calle Jardín 123, Ciudad</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div>
                  <p className={styles.infoLabel}>Teléfono</p>
                  <p className={styles.infoValue}>+54 9 11 1234-5678</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>info@viveroverde.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⏰</span>
                <div>
                  <p className={styles.infoLabel}>Horario</p>
                  <p className={styles.infoValue}>Lun-Sáb: 9:00 - 19:00</p>
                </div>
              </div>
            </div>

            <div className={styles.infoTip}>
              <p className={styles.infoTipText}>
                💡 <span><strong>Tip:</strong> Podés visitarnos sin cita previa. ¡Te esperamos!</span>
              </p>
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Síguenos en redes</h3>
            <div className={styles.socialIcons}>
              <span className={styles.socialIcon}>📱</span>
              <span className={styles.socialIcon}>📷</span>
              <span className={styles.socialIcon}>🐦</span>
              <span className={styles.socialIcon}>📘</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>✉️ Envíanos un mensaje</h2>
          
          {enviado ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✅</div>
              <h3 className={styles.successTitle}>¡Mensaje Enviado!</h3>
              <p className={styles.successText}>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Nombre completo <span>*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className={`${styles.formInput} ${errores.nombre ? styles.formInputError : ''}`}
                  value={formulario.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                />
                {errores.nombre && (
                  <p className={styles.formError}>⚠️ {errores.nombre}</p>
                )}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Correo electrónico <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className={`${styles.formInput} ${errores.email ? styles.formInputError : ''}`}
                  value={formulario.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
                {errores.email && (
                  <p className={styles.formError}>⚠️ {errores.email}</p>
                )}
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Mensaje <span>*</span>
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows="4"
                  className={`${styles.formInput} ${styles.formTextarea} ${errores.mensaje ? styles.formInputError : ''}`}
                  value={formulario.mensaje}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte? (mínimo 10 caracteres)"
                />
                {errores.mensaje && (
                  <p className={styles.formError}>⚠️ {errores.mensaje}</p>
                )}
                <p className={styles.charCount}>
                  {formulario.mensaje.length}/500 caracteres
                </p>
              </div>
              
              <button
                type="submit"
                disabled={cargando}
                className={
                  cargando
                    ? styles.submitButtonLoading
                    : styles.submitButtonReady
                }
              >
                {cargando ? (
                  <>
                    <span className={styles.spinner}>⏳</span> Enviando...
                  </>
                ) : (
                  '📨 Enviar Mensaje'
                )}
              </button>
              
              <p className={styles.formFooter}>
                * Campos obligatorios. Tu información está segura con nosotros.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}