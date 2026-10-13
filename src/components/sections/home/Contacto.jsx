import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contacto.css';

const datos = [
  { icon: <MapPin size={20} />, label: 'Dirección', valor: 'Rayon 214, Cantarranas, Barrio de Tierra Blanca,Durango, Dgo, México' },
  { icon: <Phone size={20} />, label: 'Teléfono', valor: '+52 (618) 132 5955' },
  { icon: <Mail size={20} />, label: 'Correo', valor: 'contacto@aureninfraestructura.com.mx' },
  { icon: <Clock size={20} />, label: 'Horario', valor: 'Lunes a Viernes, 8:00 – 18:00' },
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
          {/* <div className="contacto__redes">
            {['WhatsApp', 'Facebook', 'Instagram'].map(r => (
              <button key={r} className="btn-outline" style={{ fontSize: '0.75rem', padding: '8px 18px' }} onClick={() => { }}>
                {r}
              </button>
            ))}
          </div> */}
        </div>

        {/* Mapa placeholder */}
        <div className="contacto__mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d227.77556464578115!2d-104.66431248718021!3d24.0166370251194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1783363239751!5m2!1ses!2smx"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ubicación de Auren Infraestructura">
          </iframe>
        </div>
      </div>
    </section>
  );
}
