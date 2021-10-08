// Modulos
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Componentes
import { Navegacion } from "../components/shared/navbar/Navegacion";
import { Home } from "../components/shared/home/Home";
import { Ventas } from "../components/ventas/Ventas";
import { Busqueda } from "../components/ventas/Busqueda";

export function Routs () {
  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ventas" component={Ventas} />
        <Route exact path="/buscar" component={Busqueda} />
      </Switch>
    </Router>
  );
}
