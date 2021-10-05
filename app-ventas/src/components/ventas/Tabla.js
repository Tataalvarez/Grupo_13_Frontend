import React from "react";
import Filas from "./Filas";
import "./Pedidos.css"

const Tabla = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="mt-5 text-center">
      <h3>Ventas Realizadas</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Total</th>
            <th scope="col">Id_vendedor</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Valor_Unitario</th>
            <th scope="col">Fecha</th>
            <th scope="col">Documento</th>
            <th scope="col">Cliente</th>
            <th scope="col">Vendedor</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="11">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <Filas
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
