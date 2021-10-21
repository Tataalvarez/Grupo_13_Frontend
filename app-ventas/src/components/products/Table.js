import React from "react";
import Product from "./Product";

const Table = ({ data, setDataToEdit, deleteData }) => {
  return (
    <table className="table table-bordered table-striped table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Descripción</th>
          <th scope="col">Valor</th>
          <th scope="col">Estado del producto</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((el) => (
            <Product
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5">Sin datos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
