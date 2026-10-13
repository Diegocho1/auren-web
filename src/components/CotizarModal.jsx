import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { enviarCotizacion } from '@/infrastructure/email/cotizacionApi';
import './CotizarModal.css';

const EMPTY = { nombre: '', email: '', telefono: '', mensaje: '', website: '' };

export default function CotizarModal({ producto, onClose }) {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // Close with Escape + lock page scroll while open
  useEffect(() => {
    if (!producto) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [producto, onClose]);

  useEffect(() => {
    if (producto) { setForm(EMPTY); setStatus('idle'); }
  }, [producto]);

  if (!producto) return null;

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await enviarCotizacion({ ...form, producto: producto.nombre });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleTelefono = (e) => {
    const soloDigitos = e.target.value.replace(/\D/g, '').slice(0, 10);
    setForm((f) => ({ ...f, telefono: soloDigitos }));
  };

  return createPortal(
    <div className="cotizar-modal" onClick={onClose}>
      <div
        className="cotizar-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cotizar-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="cotizar-modal__close" onClick={onClose} aria-label="Cerrar">×</button>

        {status === 'success' ? (
          <div className="cotizar-modal__success">
            <h2 id="cotizar-title">¡Solicitud enviada!</h2>
            <p>Te contactaremos pronto con tu cotización.</p>
            <button className="cotizar-modal__btn" onClick={onClose}>Cerrar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 id="cotizar-title" className="cotizar-modal__title">Cotizar</h2>
            <p className="cotizar-modal__product">{producto.nombre}</p>

            <label className="cotizar-modal__field">Nombre *
              <input name="nombre" value={form.nombre} onChange={handleChange} required />
            </label>
            <label className="cotizar-modal__field">Email *
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
            <label className="cotizar-modal__field">Teléfono *
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleTelefono}
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                title='Solo números'
                required
              />
            </label>
            <label className="cotizar-modal__field">Mensaje (opcional)
              <textarea name="mensaje" rows="3" value={form.mensaje} onChange={handleChange} />
            </label>

            {/* Honeypot, hidden from humans */}
            <input
              name="website" value={form.website} onChange={handleChange}
              className="cotizar-modal__hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
            />

            {status === 'error' && (
              <p className="cotizar-modal__error">No se pudo enviar. Intenta de nuevo.</p>
            )}

            <button className="cotizar-modal__btn" disabled={status === 'sending'} type='button'>
              {status === 'sending' ? 'Enviando…' : 'Solicitar cotización'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}