import React, {useState}  from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import ProductoList from "../components/ProductoList";
import "../styles/Home.module.css";
/**
 * Página About que muestra información de la aplicación.
 */
const About: React.FC = () => {
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

    {
      id: 4,
      title: "pelotas de tenis",
      valor: 110.251,
      image: "pelotas de tenis.png",
    },

    {
      id: 5,
      title: "balon de futbol americano",
      valor: 180.628,
      image: "balon de futbol americano.png",
    },

    {
      id: 6,
      title: "bate de beisbol",
      valor: 210.759,
      image: "bate de beisbol.png",
    },

    {
      id: 7,
      title: "pelotas de besibol",
      valor: 258.989,
      image: "pelotas de beisbol.png",
    },

    {
      id: 8,
      title: "casco de beisbol",
      valor: 352.439,
      image: "casco de beisbol.png",
    },

    {
      id: 9,
      title: "casco de futbol americado",
      valor: 989.999,
      image: "casco de futbol americano.png",
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
      <h1>TODOS LOS PRODUCTOS</h1>
      <p>esta aplicacion obtendras los mejores productos</p>
      <button onClick={showAlert}>Click Me</button>
      <ProductoList productos={productos} />
      </div>
      
      
      
      
    </div>
  );
};

export default About;