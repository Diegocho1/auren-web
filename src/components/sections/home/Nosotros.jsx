import { ShieldCheck, Award, Users } from 'lucide-react';
import './Nosotros.css';

const valores = [
  { icon: <ShieldCheck size={28} />, title: 'Integridad', desc: 'Actuamos con transparencia y responsabilidad en cada proyecto.' },
  { icon: <Award size={28} />,       title: 'Excelencia', desc: 'Estándares técnicos de primer nivel en cada etapa del proceso.' },
  { icon: <Users size={28} />,       title: 'Colaboración', desc: 'Trabajamos de cerca con nuestros clientes para alcanzar sus metas.' },
];

export default function Nosotros() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="container nosotros__inner">
        {/* Left column — texto */}
        <div className="nosotros__text">
          <p className="section-label">Quiénes somos</p>
          <h2 className="section-title">Ingeniería con propósito y experiencia</h2>
          <p className="nosotros__body">
            Auren Infraestructura es un grupo de ingenieros civiles especializados en el
            diseño, supervisión y ejecución de proyectos de infraestructura. Fundados con
            la convicción de que la ingeniería de calidad transforma comunidades, hemos
            participado en proyectos a lo largo de toda la república.
          </p>
          <p className="nosotros__body">
            {/* Agrega aquí tu historia, misión y visión */}
            Nuestro equipo combina rigor técnico con una profunda comprensión del entorno
            normativo y de los retos reales del campo.
          </p>
          <a href="#servicios" className="btn-primary" style={{marginTop: '32px'}}>
            Ver servicios
          </a>
        </div>

        {/* Right column — valores */}
        <div className="nosotros__valores">
          {valores.map(v => (
            <div key={v.title} className="valor-card">
              <div className="valor-card__icon">{v.icon}</div>
              <div>
                <h3 className="valor-card__title">{v.title}</h3>
                <p className="valor-card__desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
