import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productosArray } from '@/components/sections/productos/Productos.js';
import Navbar from '@/components/Navbar';
import CotizarModal from '@/components/CotizarModal.jsx';
import './ProductoDetalles2.css';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs'


export default function ProductoDetalles2() {
  const { slug } = useParams();
  const producto = productosArray.find((p) => p.slug === slug);

  const [srcSeleccionada, setSrcSeleccionada] = useState(null);
  const [cotizarAbierto, setCotizarAbierto] = useState(false);

  if (!producto) return <p>Producto no encontrado</p>;

  // Si el producto aún no tiene `imagenes`, se usa su `imagen` única.
  const vistas = producto.imagenes ?? [{ src: producto.imagen }];
  // Si cambias de producto, la src guardada ya no existe y cae a la primera vista.
  const actual = vistas.find((v) => v.src === srcSeleccionada) ?? vistas[0];

  //Boton cotizar de navbar diferente
  const [modalAbierto, setModalAbierto] = useState(false);

  //Breadcrumbs

  return (
    <>
      <Navbar onCotizar={() => setModalAbierto(true)} />
      
      <div className="page_pd">
        <div className="container_pd">
          <div className="imgBx" data-marca={producto.clave ?? producto.categoria}>
            <img src={actual.src} alt={actual.label ?? producto.nombre} />

            {vistas.length > 1 && (
              <div className="thumbs">
                {vistas.map((v, i) => (
                  <button
                    key={v.src}
                    type="button"
                    className={`thumbs__btn ${v === actual ? 'thumbs__btn--active' : ''}`}
                    onClick={() => setSrcSeleccionada(v.src)}
                    aria-label={v.label ?? `Vista ${i + 1}`}
                    aria-pressed={v === actual}
                  >
                    <img src={v.src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="details">
            <div className="content">
              <h2>
                {producto.nombre} <br />
                <span>{producto.categoria}</span>
              </h2>

              <p>{producto.descripcion}</p>

              <button type="button" onClick={() => setCotizarAbierto(true)}>
                Cotizar
              </button>
            </div>
          </div>
        </div>
      </div>

      <CotizarModal
        abierto={modalAbierto}
        producto={cotizarAbierto ? producto : null}
        onClose={() => setCotizarAbierto(false)}
      />
    </>
  );
}
