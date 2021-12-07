import React from "react";

const Product = ({ el, setDataToEdit, deleteData }) => {
  let { id, nombre, apellido, identificacion } = el;
  return (
    <>
      <tr>
        <td>{nombre}</td>
        <td>{apellido}</td>
        <td>{identificacion}</td>
        <td>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(id)}></i>
        </td>
      </tr>
    </>
  );
};

export default Product;
