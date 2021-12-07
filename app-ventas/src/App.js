import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

// Componentes
import client from "./config/apollo";
import Header from "./components/shared/Header";
import Home from "./components/shared/Home";
import Ventas from "./components/ventas/Ventas";
import Login from "./components/login/Login";
import Products from "./components/products/Products";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/ventas">
            <Ventas />
          </Route>
          <Route path="/productos">
            <Products />
          </Route>
          <Route>
            <Home exact path="/" />
          </Route>
          <Home />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
