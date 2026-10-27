import { useState } from 'react';
import { Send } from 'lucide-react';
import './Cotizar.css';
import { enviarSolicitud } from '@/infrastructure/email/cotizacionApi';

const serviciosOpc = [
  'Construcción', 'Proyecto ejecutivo', 'Supervisión de obra',
  'Topografía', 'Mantenimiento', 'Gestión de proyectos', 'Otro',
];

const initialForm = {
  nombre: '', empresa: '', email: '', telefono: '',
  servicio: '', descripcion: '', website: '', // website = honeypot
};

export default function Cotizar() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await enviarSolicitud(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  };

  return (
    <section className="cotizar" id="cotizar">
      <div className="container cotizar__inner">
        {/* Info lateral */}
        <div className="cotizar__info">
          <p className="section-label">Solicitar cotización</p>
          <h2 className="section-title">Cuéntanos de tu proyecto</h2>
          <p className="section-subtitle">
            Compártenos los detalles de tu proyecto y uno de nuestros ingenieros
            te enviará una propuesta en menos de 48 horas.
          </p>
          <div className="cotizar__pasos">
            {['Llena el formulario', 'Recibe propuesta en 48 hrs', 'Revisamos juntos'].map((p, i) => (
              <div key={p} className="cotizar__paso">
                <span className="cotizar__paso-num">{i + 1}</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <form className="cotizar__form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre completo *</label>
              <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" required />
            </div>
            <div className="form-group">
              <label>Empresa (opcional)</label>
              <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de empresa" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Correo electrónico *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@empresa.com" required />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} placeholder="+52 000 000 0000" />
            </div>
          </div>
          <div className="form-group">
            <label>Tipo de servicio *</label>
            <select name="servicio" value={form.servicio} onChange={handleChange} required>
              <option value="">Selecciona un servicio</option>
              {serviciosOpc.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Descripción del proyecto *</label>
            <textarea name="descripcion" value={form.descripcion} onChange={handleChange}
              placeholder="Describe brevemente el proyecto, ubicación, alcance esperado..." rows={5} required />
          </div>

          <input
            name="website" value={form.website} onChange={handleChange}
            tabIndex={-1} autoComplete="off" aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px' }}
          />

          <button type="submit" className="btn-primary" disabled={status === 'sending'}
            style={{ width: '100%', justifyContent: 'center' }}>
            {status === 'sending' ? 'Enviando...' : <>Enviar solicitud <Send size={16} /></>}
          </button>

          {status === 'success' && (
            <p className="form-msg form-msg--ok">Solicitud enviada. Nos pondremos en contacto pronto.</p>
          )}
          {status === 'error' && (
            <p className="form-msg form-msg--error">{errorMsg || 'No se pudo enviar. Intenta de nuevo.'}</p>
          )}
        </form>
      </div>
    </section>
  );
}
