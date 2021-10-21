<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
// import Header from "./components/shared/Header";
import Header from './components/shared/Header';
import Home from "./components/shared/Home";
import Ventas from './components/ventas/Ventas';
import Login from './components/login/Login';
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
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/ventas" >
          <Ventas dataBase={dataBase} />
        </Route>
        <Route>
          <Home exact path="/" />
        </Route>
        <Home />
      </Switch>
    </Router>
=======
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

>>>>>>> feature/productos
  );
};

export default App;
