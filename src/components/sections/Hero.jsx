import { ArrowDown, ChevronRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background grid overlay */}
      <div className="hero__grid" />
      <div className="hero__gradient" />

      <div className="container hero__content">
        <p className="section-label fade-up">Ingeniería Civil · Infraestructura</p>
        <h1 className="hero__title fade-up delay-1">
          Construimos el<br />
          <span className="hero__title-accent">futuroooo</span> con<br />
          precisión.
        </h1>
        <p className="hero__subtitle fade-up delay-2">
          Soluciones de ingeniería civil de alto desempeño para proyectos
          que exigen experiencia, rigor técnico y visión a largo plazo.
        </p>
        <div className="hero__actions fade-up delay-3">
          <a href="#servicios" className="btn-primary">
            Nuestros servicios <ChevronRight size={16} />
          </a>
          <a href="#proyectos" className="btn-outline">
            Ver proyectos
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero__stats fade-up delay-4">
          {[
            { num: '15+', label: 'Años de experiencia' },
            { num: '120+', label: 'Proyectos entregados' },
            { num: '40+', label: 'Clientes satisfechos' },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#nosotros" className="hero__scroll" aria-label="Scroll">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
