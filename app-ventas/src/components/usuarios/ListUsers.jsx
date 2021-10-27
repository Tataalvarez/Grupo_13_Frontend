import React from "react";

const ListUsers = ({ data }) => {
  return (
    <table className="table table-bordered table-striped table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Rol</th>
          <th scope="col">Estado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((el, index) => (
            <td key={index}>{el}</td>
          ))
        }
      </tbody>
    </table>
  );
};

export default ListUsers;
