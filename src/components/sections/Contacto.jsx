import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contacto.css';

const datos = [
  { icon: <MapPin size={20} />,  label: 'Dirección',   valor: 'Rayon 214, Cantarranas, Barrio de Tierra Blanca,Durango, Dgo, México' },
  { icon: <Phone size={20} />,   label: 'Teléfono',    valor: '+52 (618) 132 5955' },
  { icon: <Mail size={20} />,    label: 'Correo',      valor: 'contacto@aureninfraestructura.com.mx' },
  { icon: <Clock size={20} />,   label: 'Horario',     valor: 'Lunes a Viernes, 8:00 – 18:00' },
];

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="container contacto__inner">
        {/* Datos */}
        <div className="contacto__datos">
          <p className="section-label">Contáctanos</p>
          <h2 className="section-title" style={{ color: '#fff' }}>Estamos para atenderte</h2>
          <p className="section-subtitle" style={{ color: 'var(--silver)' }}>
            Escríbenos o llámanos, con gusto resolveremos tus dudas y te orientaremos
            sobre cómo podemos ayudarte en tu proyecto.
          </p>

          <div className="contacto__lista">
            {datos.map(d => (
              <div key={d.label} className="contacto__item">
                <div className="contacto__item-icon">{d.icon}</div>
                <div>
                  <span className="contacto__item-label">{d.label}</span>
                  <span className="contacto__item-valor">{d.valor}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Redes sociales (placeholders) */}
          <div className="contacto__redes">
            {['WhatsApp', 'Facebook', 'Instagram'].map(r => (
              <button key={r} className="btn-outline" style={{fontSize:'0.75rem', padding:'8px 18px'}} onClick={() => {}}>
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Mapa placeholder */}
        <div className="contacto__mapa">
          <div className="mapa-placeholder">
            <MapPin size={40} />
            <p>Mapa de ubicación</p>
            <span>Inserta aquí tu iframe de Google Maps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
