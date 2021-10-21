import React from "react";

const Product = ({ el, setDataToEdit, deleteData }) => {
  let { id, description, price, status } = el;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{status}</td>
        <td>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(id)}></i>
        </td>
      </tr>
    </>
  );
};

export default Product;
