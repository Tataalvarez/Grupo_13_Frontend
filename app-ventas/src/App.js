import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
// import Header from "./components/shared/Header";
import Header from './components/shared/Header';
import Home from "./components/shared/Home";
import Ventas from './components/ventas/Ventas';
// import Login from './components/login/Login'
// import Login from "./components/login/Login";
// import Ventas from "./components/ventas/Ventas";
// import { Busqueda } from "./components/ventas/Busqueda";

const App = () => {
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
  // const firebase = useFirebaseApp();
  // console.log(firebase);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/ventas" >
          <Ventas dataBase={dataBase} />
        </Route>
        <Route>
          <Home exact path="/home" />
        </Route>
        <Home />
      </Switch>
    </Router>
  );
};

export default App;
