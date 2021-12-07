import React from "react";
//import "./Pedidos.css";

const Pedidos = ({ el, setDataToEdit, deleteData }) => {
  let { id, nombre, apellido, identificacion } = el;

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{nombre}</td>
        <td>{apellido}</td>
        <th>{identificacion}</th>
        <td>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(id)}></i>
        </td>
      </tr>
    </>
  );
};

export default Pedidos;
