import './Clientes.css';

// Imagenes clientes
import cicsa from '@/assets/clientes/cicsa.webp';
import coca from '@/assets/clientes/coca.webp';
import playboy from '@/assets/clientes/playboy.webp';
import durex from '@/assets/clientes/durex.webp';
import cfe from '@/assets/clientes/cfe.webp';
import bienestar from '@/assets/clientes/bienestar.webp';

// Reemplaza con logos reales: { id, nombre, logo }
const clientes = [
  { id: 1, nombre: 'Cicsa', logo: cicsa },
  { id: 2, nombre: 'Coca-Cola', logo: coca },
  { id: 3, nombre: 'Playboy', logo: playboy },
  { id: 4, nombre: 'Durex', logo: durex },
  { id: 5, nombre: 'CFE', logo: cfe },
  { id: 6, nombre: 'Bienestar', logo: bienestar },
];

const testimonios = [
  {
    texto: '"El equipo de Auren demostró un nivel de compromiso y calidad técnica que superó nuestras expectativas. Entregaron en tiempo y forma."',
    autor: 'Cicsa',
    cargo: 'Director de Infraestructura',
  },
  {
    texto: '"Su capacidad para resolver imprevistos en campo sin comprometer la calidad ni el presupuesto habla de su madurez como empresa."',
    autor: 'CFE',
    cargo: 'Coordinador de Proyectos',
  },
   {
    texto: '"Su capacidad para ser todo un semental es increible."',
    autor: 'Durex',
    cargo: 'Coordinador del Amor',
  },
  {
    texto: '"Tomen agua mejor."',
    autor: 'Coca-Cola',
    cargo: 'Coordinador de piedras en el riñon',
  },
];

export default function Clientes() {
  return (
    <section className="clientes" id="clientes">
      <div className="container">
        <div className="clientes__header">
          <p className="section-label">Confianza</p>
          <h2 className="section-title">Con quiénes hemos trabajado</h2>
        </div>

        {/* Logos */}
        <div className="clientes__logos">
          {clientes.map(c => (
            <div key={c.id} className="cliente-logo">
              {c.logo
                ? <img src={c.logo} alt={c.nombre} />
                : <span className="cliente-logo__placeholder">{c.nombre}</span>}
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="clientes__testimonios">
          {testimonios.map((t, i) => (
            <div key={i} className="testimonio-card">
              <div className="testimonio-card__quote">"</div>
              <p className="testimonio-card__texto">{t.texto}</p>
              <div className="testimonio-card__autor">
                <strong>{t.autor}</strong>
                <span>{t.cargo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
