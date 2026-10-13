import './Proyectos.css';

// Imports de imágenes
import autopista from '@/assets/proyectos/autopista.webp';
import hidraulica from '@/assets/proyectos/hidraulica.webp';
import mall from '@/assets/proyectos/mall.webp';
import panamericana from '@/assets/proyectos/panamericana.webp';
import puente from '@/assets/proyectos/puente.webp';

// Llena este arreglo con tus proyectos reales:
// { id, titulo, categoria, descripcion, imagen }
const proyectos = [
  { id: 1, titulo: 'Carretera Panamericana en Panamá', categoria: 'Carreteras', descripcion: 'La Carretera Panamericana en Panamá...', imagen: panamericana },
  { id: 2, titulo: 'Instalación de Sistemas Hidráulicos Hospital 450', categoria: 'Hidráulico',  descripcion: 'El hostpital 450...', imagen: hidraulica },
  { id: 3, titulo: 'Centro Comercial Las Américas', categoria: 'Edificación', descripcion: 'El Centro Comercial Las Américas...', imagen: mall },
  { id: 4, titulo: 'Puente sobre el Río Grande', categoria: 'Puentes',     descripcion: 'El Puente sobre el Río Grande...', imagen: puente },
  { id: 5, titulo: 'Autopista San Luis-Río Verde', categoria: 'Carreteras', descripcion: 'La Autopista San Luis-Río Verde...', imagen: autopista },

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
