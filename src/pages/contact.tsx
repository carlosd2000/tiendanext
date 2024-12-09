import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

/**
 * PÃ¡gina de contacto con formulario de contacto simulado.
 */
const Contact: React.FC = () => {
  /**
   * Muestra una alerta cuando se hace clic en enviar.
   */
  const handleContact = () => {
    Swal.fire({
      title: 'Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="container">
      <div className="navbar">
        <Link href="/">PROMOCIONES</Link>
        <Link href="/productos">PRODUCTOS</Link>
        <Link href="/contact">CONTACTO</Link>
      </div>
      <h1>Contact Us</h1>
      <button onClick={handleContact}>Enviar</button>
    </div>
  );
};

export default Contact;