import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Nosotros from './components/sections/Nosotros';
import Servicios from './components/sections/Servicios';
import Proyectos from './components/sections/Proyectos';
import Clientes from './components/sections/Clientes';
import Cotizar from './components/sections/Cotizar';
import Contacto from './components/sections/Contacto';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Proyectos />
        <Clientes />
        <Cotizar />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
