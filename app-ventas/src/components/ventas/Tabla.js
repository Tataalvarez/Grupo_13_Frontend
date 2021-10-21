import React from "react";
import Pedidos from "./Pedidos";
import "./Ventas.css";

const Tabla = ({ data, setDataToEdit, deleteData }) => {
  return (
    <table className="table table-bordered table-striped table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Detalle</th>
          <th scope="col">V.Unitario</th>
          <th scope="col">V.Total</th>
          <th scope="col">Fecha</th>
          <th scope="col">NIT</th>
          <th scope="col">Cliente</th>
          <th scope="col">Estado</th>
          <th scope="col">Id</th>
          <th scope="col">Vendedor</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((el) => (
            <Pedidos
              key={el.codigo}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))
        ) : (
          <tr>
            <td colSpan="12">Sin datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tabla;
