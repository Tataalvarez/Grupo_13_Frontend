import React from "react";
import { useRowSelect } from "react-table";
import Users from "./Users";

const ListUsers = ({ data, setDataToEdit, deleteData }) => {
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
        {data.length > 0 ? (
          data.map((el) => (
            <Users
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

export default ListUsers;
