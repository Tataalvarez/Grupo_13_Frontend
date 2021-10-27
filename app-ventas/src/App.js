import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Header from "./components/shared/Header";
import Home from "./components/shared/Home";
import Ventas from "./components/ventas/Ventas";
import Login from "./components/login/Login";
import Products from "./components/products/Products";
import Usuarios from "./components/usuarios/Usuarios";
import ListUsers from "./components/usuarios/ListUsers";
import "./index.css";

const App = () => {
  const dataBase = [
    {
      code: 1,
      nombre: "Juan",
      rol: "Vendedor",
      estado: "Activo",
      quantity: 9,
      description: "Camiseta talla XL",
      price: 50,
      total: 450,
      date: "12-08-2020",
      nit: "87453422",
      customer: "Richar Mora",
      status: "Cancelada",
      id: 2,
      seller: "Diana",
    },
    {
      code: 2,
      quantity: 8,
      description: "Camiseta talla S",
      price: 50,
      total: 400,
      date: "12-08-2020",
      nit: "87453422",
      customer: "Juan Mora",
      status: "En proceso",
      id: 3,
      seller: "Andrea",
    },
    {
      code: 3,
      quantity: 7,
      description: "Camiseta talla M",
      price: 50,
      total: 350,
      date: "12-08-2020",
      nit: "1234567896",
      customer: "Jose Rojas",
      status: "Entregada",
      id: 4,
      seller: "Tatiana",
    },
  ];
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/ventas">
          <Ventas dataBase={dataBase} />
        </Route>
        <Route path="/productos">
          <Products dataBase={dataBase} />
        </Route>
        <Route path="/usuarios" dataBase={dataBase} component={Usuarios}  />
        <Switch>
          <Route path="/usuarios/listar">
            <ListUsers data={dataBase} />
          </Route>
        </Switch>
        <Route>
          <Home exact path="/" />
        </Route>
        <Home />
      </Switch>
    </Router>
  );
};

export default App;
