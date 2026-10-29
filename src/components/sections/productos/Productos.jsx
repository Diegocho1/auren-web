import './Productos.css';
import { useState } from 'react';
//import { IconSearch, IconDrone, IconRadar2, IconGps, IconFocus2, IconChalkboardTeacher } from '@tabler/icons-react'
import { Link } from 'react-router-dom';
import { productosArray } from './Productos.js';
import CotizarModal from '@/components/CotizarModal.jsx';




export default function Productos() {
    const [productoCotizar, setProductoCotizar] = useState(null);

    return (

        <section className="container productos" id="productos">

            <div className="products-header">
                <h1>EL MEJOR EQUIPO PARA TU TRABAJO</h1>

                {/* <div className="search">
                    <div className="search-btn">
                        <IconSearch size={20} stroke={1.5} />
                    </div>
                    <input type="text" placeholder="Search" />
                </div> */}
            </div>

            {/* <div className="categories">
                <div className="category-badge">
                    <IconDrone size={20} stroke={1.5} /> Drones <input type="checkbox" />
                </div>
                <div className="category-badge">
                    <IconRadar2 size={20} stroke={1.5} /> Estaciones <input type="checkbox" />
                </div>
                <div className="category-badge">
                    <IconGps size={20} stroke={1.5} /> GPS <input type="checkbox" />
                </div>
                <div className="category-badge">
                    <IconChalkboardTeacher size={20} stroke={1.5} /> Asesores <input type="checkbox" />
                </div>
                <div className="category-badge">
                    <IconFocus2 size={20} stroke={1.5} /> Niveles <input type="checkbox" />
                </div>
            </div> */}

            <div className="content">
                <main>
                    {productosArray.map((p) => (
                        <div key={p.slug} className="shoe-card">
                            <Link to={`/productos/${p.slug}`} className="shoe-img">
                                <img src={p.imagen} alt={p.nombre} />
                            </Link>

                            <div className="shoe-text">
                                <Link to={`/productos/${p.slug}`} className="shoe-text">
                                    <span className="shoe-title">{p.nombre}</span>
                                    <span className="shoe-subtitle">{p.categoria}</span>
                                </Link>

                                <button
                                    type="button"
                                    className="button"
                                    onClick={() => setProductoCotizar(p)}
                                >
                                    <span className="shoe-price">Cotizar</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </main>

                <CotizarModal
                    producto={productoCotizar}
                    onClose={() => setProductoCotizar(null)}
                />
            </div>
        </section>
    );
}