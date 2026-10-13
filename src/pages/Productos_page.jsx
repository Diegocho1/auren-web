import './index.css';
import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import HeroP from '../components/sections/productos/HeroP';
import ProductosCard from '../components/sections/productos/Productos.jsx';

export default function Productos_page() {
  return (
    <>
      <Navbar />
      <HeroP />
      <main>
        <ProductosCard />
      </main>
      <Footer />

    </>
  );
}