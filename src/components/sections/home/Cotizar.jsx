import { useState } from 'react';
import { Send } from 'lucide-react';
import './Cotizar.css';

const serviciosOpc = [
  'Construcción', 'Proyecto ejecutivo', 'Supervisión de obra',
  'Topografía', 'Mantenimiento', 'Gestión de proyectos', 'Otro',
];

export default function Cotizar() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    servicio: '', descripcion: '', presupuesto: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Conectar con backend o servicio de email
    alert('Solicitud enviada. Nos pondremos en contacto pronto.');
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
              <label>Empresa</label>
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
          <div className="form-group">
            <label>Presupuesto estimado</label>
            <select name="presupuesto" value={form.presupuesto} onChange={handleChange}>
              <option value="">Selecciona un rango (opcional)</option>
              <option>Menos de $500,000</option>
              <option>$500,000 – $2,000,000</option>
              <option>$2,000,000 – $10,000,000</option>
              <option>Más de $10,000,000</option>
            </select>
          </div>
          <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center'}}>
            Enviar solicitud <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
