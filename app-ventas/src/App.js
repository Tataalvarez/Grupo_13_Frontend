import React from "react";
//import "./App.css";

// Componentes
import Pedidos from "./components/ventas/Pedidos";
//import Formulario from "./components/pedidos/Formulario";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Pedidos />
      </div>
    </div>
  );
} 

export default App;
