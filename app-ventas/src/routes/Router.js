// Modulos
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Componentes
import Navegacion from "../components/shared/navbar/Navegacion";
import Home from "../components/shared/home/Home";

const Rutas = () => {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Rutas;
