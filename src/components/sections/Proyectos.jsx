import './Proyectos.css';

// Llena este arreglo con tus proyectos reales:
// { id, titulo, categoria, descripcion, imagen }
const proyectos = [
  { id: 1, titulo: 'Proyecto A', categoria: 'Carreteras', descripcion: 'Descripción breve del proyecto.', imagen: '' },
  { id: 2, titulo: 'Proyecto B', categoria: 'Hidráulico',  descripcion: 'Descripción breve del proyecto.', imagen: '' },
  { id: 3, titulo: 'Proyecto C', categoria: 'Edificación', descripcion: 'Descripción breve del proyecto.', imagen: '' },
  { id: 4, titulo: 'Proyecto D', categoria: 'Puentes',     descripcion: 'Descripción breve del proyecto.', imagen: '' },
];

const categorias = ['Todos', 'Carreteras', 'Hidráulico', 'Edificación', 'Puentes'];

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <div className="container">
        <div className="proyectos__header">
          <p className="section-label">Portafolio</p>
          <h2 className="section-title">Proyectos destacados</h2>
          <p className="section-subtitle">
            Una muestra de los proyectos en los que hemos dejado nuestra huella técnica.
          </p>
        </div>

        {/* Filtros */}
        <div className="proyectos__filtros">
          {categorias.map(c => (
            <button key={c} className="filtro-btn" onClick={() => {}}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proyectos__grid">
          {proyectos.map(p => (
            <div key={p.id} className="proyecto-card">
              <div className="proyecto-card__img">
                {p.imagen
                  ? <img src={p.imagen} alt={p.titulo} />
                  : <div className="proyecto-card__placeholder" />}
                <span className="proyecto-card__cat">{p.categoria}</span>
              </div>
              <div className="proyecto-card__body">
                <h3 className="proyecto-card__title">{p.titulo}</h3>
                <p className="proyecto-card__desc">{p.descripcion}</p>
                <button className="servicio-card__link" onClick={() => {}}>Ver detalle →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
