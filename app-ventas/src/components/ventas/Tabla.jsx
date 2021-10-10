import React from "react";
import Pedidos from "./Pedidos";
import "./Ventas.css";

const Tabla = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="mt-5 text-center">
      <h3>Ventas Realizadas</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Detalle</th>
            <th scope="col">V.Unitario</th>
            <th scope="col">V.Total</th>
            <th scope="col">Fecha</th>
            <th scope="col">Documento</th>
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
    </div>
  );
}

export default Tabla;
