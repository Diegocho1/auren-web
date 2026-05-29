import './Clientes.css';

// Reemplaza con logos reales: { id, nombre, logo }
const clientes = [
  { id: 1, nombre: 'Cliente 1', logo: '' },
  { id: 2, nombre: 'Cliente 2', logo: '' },
  { id: 3, nombre: 'Cliente 3', logo: '' },
  { id: 4, nombre: 'Cliente 4', logo: '' },
  { id: 5, nombre: 'Cliente 5', logo: '' },
  { id: 6, nombre: 'Cliente 6', logo: '' },
];

const testimonios = [
  {
    texto: '"El equipo de Auren demostró un nivel de compromiso y calidad técnica que superó nuestras expectativas. Entregaron en tiempo y forma."',
    autor: 'Nombre del cliente',
    cargo: 'Director de Infraestructura',
  },
  {
    texto: '"Su capacidad para resolver imprevistos en campo sin comprometer la calidad ni el presupuesto habla de su madurez como empresa."',
    autor: 'Nombre del cliente',
    cargo: 'Coordinador de Proyectos',
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
