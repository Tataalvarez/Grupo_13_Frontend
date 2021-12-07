import React from "react";
import Pedidos from "./Pedidos";
import "./Ventas.css";

const Tabla = ({ data, setDataToEdit, deleteData }) => {
  return (
    <table className="table table-bordered table-striped table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Identificacion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data && 
          data.getUsers.map((el) => (
            <Pedidos
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))
        }
      </tbody>
    </table>
  );
};

export default Tabla;
