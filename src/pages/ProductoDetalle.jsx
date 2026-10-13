import { useParams } from "react-router-dom";
import { productosArray } from "@/components/sections/productos/Productos.js";
import './ProductoDetalle.css';

export default function ProductoDetalle() {
  const { slug } = useParams();
  const producto = productosArray.find((p) => p.slug === slug);

  if (!producto) return <p>Producto no encontrado</p>;

  return (

    <div className="producto-detalle">
      <div className="section">
        <div className="img-wrap">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="info-wrap mob-margin">
          <p className="title-up">{producto.categoria}</p>
          <h2>{producto.nombre}</h2>
          <div className="section-fluid">
            <input className="desc-btn" type="radio" id="desc-1" name="desc-btn" />
            <label htmlFor="desc-1">Description</label>
            <div className="section-fluid">
              <p>{producto.descripcion}</p>
            </div>
          </div>
        </div>

        <div className="info-wrap">
          <button className="btn">Cotizar</button>
        </div>

        <div className="back-color"></div>
      </div>
    </div>
  );
}