import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pedidos from "./ventas/Pedidos";

const Rutas = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/ventas" component={Pedidos} />
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
