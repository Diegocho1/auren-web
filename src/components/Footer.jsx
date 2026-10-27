import './Footer.css';
import { Link } from 'react-router-dom'


export default function Footer() {
  const year = new Date().getFullYear();


  const links = [
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Servicios', href: '/#servicios' },
    // { label: 'Proyectos', href: '/#proyectos' },
    // { label: 'Clientes', href: '/#clientes' },
    { label: 'Contacto', href: '/#contacto' },
    { label: 'Cotizar', to: '/#cotizar' },

  ];


  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">AUREN</span>
          <span className="footer__sub">INFRAESTRUCTURA</span>
          <p className="footer__tagline">Ingeniería civil de alto desempeño.</p>
        </div>
        <div className="footer__nav">
            {links.map(l =>
              l.to ? (
                <Link key={l.label} to={l.to} className="footer__link">{l.label}</Link>
              ) : (
                <a key={l.label} href={l.href} className="footer__link">{l.label}</a>
              )
            )}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {year} Auren Infraestructura. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
