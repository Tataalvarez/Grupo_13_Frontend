import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useFirebaseApp } from "reactfire";

// Componentes
import { Navegacion } from "./components/shared/navbar/Navegacion";
import { Home } from "./components/shared/home/Home";
import Ventas from "./components/ventas/Ventas";
import { Busqueda } from "./components/ventas/Busqueda";

//import { Container } from "react-bootstrap";

export function App() {
  const dataBase = [
    {
      id: 1,
      cantidad: 9,
      detalle: "Camiseta talla XL",
      precio: 50,
      total: 450,
      fecha: "12-08-2020",
      cliente: "Richar Mora",
      documento: "87453422",
      estado: "Cancelada",
      codigo: 2,
      vendedor: "Diana",
    },
    {
      id: 2,
      cantidad: 8,
      detalle: "Camiseta talla S",
      precio: 50,
      total: 400,
      fecha: "12-08-2020",
      cliente: "Juan Mora",
      documento: "87453422",
      estado: "En proceso",
      codigo: 3,
      vendedor: "Andrea",
    },
    {
      id: 3,
      cantidad: 7,
      detalle: "Camiseta talla M",
      precio: 50,
      total: 350,
      fecha: "12-08-2020",
      documento: "87453422",
      cliente: "David Mora",
      estado: "Entregada",
      codigo: 4,
      vendedor: "Tatiana",
    },
  ];
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <>
      <Router>
        <Navegacion />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ventas">
            <Ventas dataBase={dataBase} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
