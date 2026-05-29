import { HardHat, FileText, Layers, Ruler, Wrench, BarChart2 } from 'lucide-react';
import './Servicios.css';

const servicios = [
  { icon: <HardHat size={32} />,   title: 'Construcción',         desc: 'Ejecución de obras civiles con supervisión técnica especializada.' },
  { icon: <FileText size={32} />,  title: 'Proyectos ejecutivos', desc: 'Desarrollo de proyectos detallados para cualquier tipo de obra.' },
  { icon: <Layers size={32} />,    title: 'Supervisión de obra',  desc: 'Control de calidad, avances y cumplimiento normativo en sitio.' },
  { icon: <Ruler size={32} />,     title: 'Topografía',           desc: 'Levantamientos topográficos y geodésicos con equipo de precisión.' },
  { icon: <Wrench size={32} />,    title: 'Mantenimiento',        desc: 'Programas de mantenimiento preventivo y correctivo de infraestructura.' },
  { icon: <BarChart2 size={32} />, title: 'Gestión de proyectos', desc: 'Planeación, control de costos y entrega oportuna de obras.' },
];

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="servicios__header">
          <p className="section-label">Lo que hacemos</p>
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones integrales de ingeniería civil para el sector
            público y privado, desde la etapa de diseño hasta la entrega final.
          </p>
        </div>

        <div className="servicios__grid">
          {servicios.map(s => (
            <div key={s.title} className="servicio-card">
              <div className="servicio-card__icon">{s.icon}</div>
              <h3 className="servicio-card__title">{s.title}</h3>
              <p className="servicio-card__desc">{s.desc}</p>
              <button className="servicio-card__link" onClick={() => {}}>
                Saber más →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
