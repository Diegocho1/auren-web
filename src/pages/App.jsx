import './index.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/home/Hero';
import Nosotros from '@/components/sections/home/Nosotros';
import Servicios from '@/components/sections/home/Servicios';
import Proyectos from '@/components/sections/home/Proyectos';
import Clientes from '@/components/sections/home/Clientes';
import Cotizar from '@/components/sections/home/Cotizar';
import Contacto from '@/components/sections/home/Contacto';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        {/* <Proyectos />
        <Clientes /> */}
        <Cotizar />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
