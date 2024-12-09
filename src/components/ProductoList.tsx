import React from "react";
import { Producto } from "../types/Producto";
import ProductoCard from "./ProductoCard";

interface ProductoListProps {
  productos: Producto[];
}

const ProductoList: React.FC<ProductoListProps> = ({ productos }) => {
  return (
    <div className="productoList">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ProductoList;
