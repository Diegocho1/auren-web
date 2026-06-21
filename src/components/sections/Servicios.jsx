import { useRef, useState } from "react";
import { House, Road, Shrub, Car, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import './Servicios.css';


const serviciosCategories = [
  {
    id: "proyectos-ejecutivos",
    title: "Proyectos ejecutivos",
    items: [
      { icon: <House size={32} />, title: 'Casa - habitación', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Road size={32} />, title: 'Infraestructura Vial', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Shrub size={32} />, title: 'Fraccionamientos', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Car size={32} />, title: 'Estacionamientos', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Building2 size={32} />, title: 'Desarrollos Urbanos', desc: 'Texto descriptivo sobre el servicio.' },

    ],
  },
  {
    id: "estudios",
    title: "Estudios",
    items: [
      { icon: <House size={32} />, title: 'Impacto Vial', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Road size={32} />, title: 'Aerofotogrametría con Drones', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Shrub size={32} />, title: 'Topografía', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Car size={32} />, title: 'Levantamientos', desc: 'Texto descriptivo sobre el servicio.' },
    ],
  },
  {
    id: "servicios",
    title: "Servicios",
    items: [
      { icon: <House size={32} />, title: 'Impacto Vial', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Road size={32} />, title: 'Aerofotogrametría con Drones', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Shrub size={32} />, title: 'Topografía', desc: 'Texto descriptivo sobre el servicio.' },
      { icon: <Car size={32} />, title: 'Levantamientos', desc: 'Texto descriptivo sobre el servicio.' },
    ],
  },
];


export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);
  const drag = useRef({ startX: 0, deltaX: 0, active: false });

  const total = serviciosCategories.length;

  const goTo = (index) => setActiveIndex((index + total) % total);
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const getX = (e) => e.clientX ?? e.touches?.[0]?.clientX ?? 0;

  const handlePointerDown = (e) => {
    drag.current = { startX: getX(e), deltaX: 0, active: true };
    setIsDragging(true);
    if (trackRef.current) trackRef.current.style.transition = "none";
  };

  const handlePointerMove = (e) => {
    if (!drag.current.active || !trackRef.current) return;
    drag.current.deltaX = getX(e) - drag.current.startX;
    const percent =
      (drag.current.deltaX / trackRef.current.offsetWidth) * 100;
    trackRef.current.style.transform = `translateX(${-activeIndex * 100 + percent
      }%)`;
  };

  const endDrag = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.transition = "";

    const THRESHOLD = 60; // px mínimos para considerar el deslizamiento
    if (drag.current.deltaX > THRESHOLD) {
      goPrev();
    } else if (drag.current.deltaX < -THRESHOLD) {
      goNext();
    } else if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-activeIndex * 100}%)`;
    }
    drag.current.deltaX = 0;
  };

  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <div className="servicios__header">
          <p className="section-label">Lo que hacemos</p>
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones integrales de ingeniería civil para el sector
            público y privado, desde la etapa de diseño hasta la entrega
            final.
          </p>
        </div>

        <div className="servicios__tabs" role="tablist">
          {serviciosCategories.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={i === activeIndex}
              className={`servicios__tab ${i === activeIndex ? "servicios__tab--active" : ""
                }`}
              onClick={() => goTo(i)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="servicios__carousel">
          <button
            className="servicios__arrow servicios__arrow--prev"
            onClick={goPrev}
            aria-label="Categoría anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className={`servicios__viewport ${isDragging ? "servicios__viewport--dragging" : ""
              }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
          >
            <div
              className="servicios__track"
              ref={trackRef}
              style={{ transform: `translateX(${-activeIndex * 100}%)` }}
            >
              {serviciosCategories.map((cat) => (
                <div className="servicios__slide" key={cat.id}>
                  <div className="servicios__grid">
                    {cat.items.map((s) => (
                      <div key={s.title} className="servicio-card">
                        <div className="servicio-card__icon">{s.icon}</div>
                        <h3 className="servicio-card__title">{s.title}</h3>
                        <p className="servicio-card__desc">{s.desc}</p>
                        <button
                          className="servicio-card__link"
                          onClick={() => { }}
                        >
                          Saber más →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="servicios__arrow servicios__arrow--next"
            onClick={goNext}
            aria-label="Siguiente categoría"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="servicios__dots">
          {serviciosCategories.map((cat, i) => (
            <button
              key={cat.id}
              className={`servicios__dot ${i === activeIndex ? "servicios__dot--active" : ""
                }`}
              onClick={() => goTo(i)}
              aria-label={`Ir a ${cat.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
