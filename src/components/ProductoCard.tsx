import React from "react"; // Importa React
import Swal from "sweetalert2"; // Importa SweetAlert2
import { Producto } from "../types/Producto"; // Importa la interfaz Movie

interface ProductoCardProps {
  producto: Producto;
}

const ProductoCard: React.FC<ProductoCardProps> = ({ producto }) => {
  // Ruta absoluta para importar la imagen basada en el título
  const imageSrc = `/assets/img/${producto.image}`;

  const showDetails = () => {
    Swal.fire({
      title: producto.title,
      text: `agregaste al carrito por valor: ${producto.valor}`,
      imageUrl: imageSrc, // Usamos la imagen en SweetAlert2
      imageWidth: 200,
      imageAlt: `${producto.title} Poster`,
      confirmButtonText: "EXCELENTE!",
    });
  };

  return (
    <div className="producto-card" >
      <img src={imageSrc} alt={producto.title} className="producto-image" />
      <h3>{producto.title}</h3>
      <p>{producto.valor}</p>
      <button onClick={showDetails}>agregar al carrito</button>
    </div>
  );
};

export default ProductoCard;
