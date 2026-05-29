import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">AUREN</span>
          <span className="footer__sub">INFRAESTRUCTURA</span>
          <p className="footer__tagline">Ingeniería civil de alto desempeño.</p>
        </div>
        <div className="footer__nav">
          {['Nosotros','Servicios','Proyectos','Clientes','Contacto','Cotizar'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="footer__link">{l}</a>
          ))}
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
