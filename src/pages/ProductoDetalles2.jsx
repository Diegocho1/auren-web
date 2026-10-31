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


  return (
    <>
      <Navbar onCotizar={() => setCotizarAbierto(true)} />

      <div className="page_pd">
        <Breadcrumbs
          items={[
            { label: "Inicio", to: "/" },
            { label: "Productos", to: "/productos" },
            { label: producto.nombre },
          ]}
        />

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
              <span className="details__eyebrow">{producto.categoria}</span>

              <h2 className="details__title">{producto.nombre}</h2>

              <p className="details__lead">{producto.descripcion}</p>

              {producto.especificaciones?.length > 0 && (
                <dl className="details__specs">
                  {producto.especificaciones.map((esp) => (
                    <div className="details__spec" key={esp.etiqueta}>
                      <dt className="details__spec-value">{esp.valor}</dt>
                      <dd className="details__spec-label">{esp.etiqueta}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <button
                type="button"
                className="details__cta"
                onClick={() => setCotizarAbierto(true)}
              >
                Cotizar
              </button>
            </div>
          </div>
        </div>
      </div>

      <CotizarModal
        abierto={cotizarAbierto}
        producto={cotizarAbierto ? producto : null}
        onClose={() => setCotizarAbierto(false)}
      />
    </>
  );
}
