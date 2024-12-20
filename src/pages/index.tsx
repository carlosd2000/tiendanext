import React, {useState}  from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import ProductoList from "../components/ProductoList";
import "../styles/Home.module.css";

/**
 * Componente de página principal.
 */
const Home: React.FC = () => {
  /**
   * Muestra una alerta de bienvenida usando SweetAlert2.
   */
  const showAlert = () => {
    Swal.fire({
      title: 'bienvenido al mundo del deporte!',
      text: 'Disfruta de los mejores juegos deportivos.',
      icon: 'success',
      confirmButtonText: '¡Vamos!',
    });
  };
  const [productos] = useState([
    {
      id: 1,
      title: "balon de futbol adidas",
      valor: 132.468,
      image: "balon de futbol.png",
    },
    {
      id: 2,
      title: "raqueta de tenis",
      valor: 529.699,
      image: "raqueta de tenis.png",
    },
    {
      id: 3,
      title: "balon de basquetbol",
      valor: 261.795,
      image: "balon de basquetbol.png",
    },


  ]);

  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">PROMOCIONES</Link>
        <Link href="/productos">PRODUCTOS</Link>
        <Link href="/contact">CONTACTO</Link>
      </div>
      <div>
      <h1>DESCUENTOS DEL 50% EN TIENDA DEPORTIVA</h1>
      <p>Bienvenido al mundo del deporte.</p>
      <button onClick={showAlert}>Click Me</button>
      <ProductoList productos={productos} />
      </div>
      
      
      
      
    </div>
  );
};

export default Home;