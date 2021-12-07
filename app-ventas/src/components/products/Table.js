import React from "react";
import Product from "./Product";

const Table = ({ data, setDataToEdit, deleteData }) => {
  return (
    <table className="table table-bordered table-striped table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Identificacion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.getUsers.map((el) => (
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
