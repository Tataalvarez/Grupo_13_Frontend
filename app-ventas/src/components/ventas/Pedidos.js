import React from "react";
//import "./Pedidos.css";

const Pedidos = ({ el, setDataToEdit, deleteData }) => {
  let {
    code,
    quantity,
    description,
    price,
    total,
    date,
    nit,
    customer,
    status,
    id,
    seller
  } = el;

  return (
    <>
      <tr>
        <td>{code}</td>
        <td>{quantity}</td>
        <th>{description}</th>
        <td>{price}</td>
        <td>{total}</td>
        <td>{date}</td>
        <td>{nit}</td>
        <td>{customer}</td>
        <td>{status}</td>
        <td>{id}</td>
        <td>{seller}</td>
        <td>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(code)}></i>
        </td>
      </tr>
    </>
  );
}

export default Pedidos;
