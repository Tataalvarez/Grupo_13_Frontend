// Modulos
import React from "react";

//Componentes
import Products from "./components/products/Products";

function App() {
  const dataBase = [
    {
      id: 1,
      quantity: 9,
      description: "Camiseta talla XL",
      price: 50,
      total: 450,
      date: "12-08-2020",
      customer: "Richar Mora",
      nit: "87453422",
      status: "Cancelada",
      code: 2,
      seller: "Diana",
    },
    {
      id: 2,
      quantity: 8,
      description: "Camiseta talla S",
      price: 50,
      total: 400,
      date: "12-08-2020",
      customer: "Juan Mora",
      nit: "87453422",
      status: "En proceso",
      code: 3,
      seller: "Andrea",
    },
    {
      id: 3,
      quantity: 7,
      description: "Camiseta talla M",
      price: 50,
      total: 350,
      date: "12-08-2020",
      dustomerto: "87453422",
      nit: "David Mora",
      status: "Entregada",
      code: 4,
      seller: "Tatiana",
    },
  ];
  return (
    <div className="container p-4">
      <div className="row">
        <Products dataBase={dataBase} />
      </div>
    </div>

  );
}

export default App;
