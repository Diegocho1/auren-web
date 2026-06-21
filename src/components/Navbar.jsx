import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/aurenLogo.jpeg";
import './Navbar.css';

const links = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <div className="navbar__logo-placeholder">
            <img src={logo} alt="Auren Infraestructura" className="navbar__logo-img" />
            <span className="navbar__logo-text">AUREN</span>
            <span className="navbar__logo-sub">INFRAESTRUCTURA</span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link">{l.label}</a>
          ))}
          <a href="#cotizar" className="btn-primary navbar__cta">Cotizar</a>
        </nav>

        {/* Mobile toggle */}
        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#cotizar" className="btn-primary" style={{ marginTop: '12px' }} onClick={() => setOpen(false)}>
            Cotizar
          </a>
        </div>
      )}
    </header>
  );
}
