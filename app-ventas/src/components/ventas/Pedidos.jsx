import React from "react";
//import "./Pedidos.css";

const Pedidos = ({ el, setDataToEdit, deleteData }) => {
  let {
    codigo,
    cantidad,
    detalle,
    precio,
    total,
    fecha,
    cliente,
    documento,
    estado,
    id,
    vendedor
  } = el;

  return (
    <>
      <tr>
        <td>{codigo}</td>
        <td>{cantidad}</td>
        <th>{detalle}</th>
        <td>{precio}</td>
        <td>{total}</td>
        <td>{fecha}</td>
        <td>{documento}</td>
        <td>{cliente}</td>
        <td>{estado}</td>
        <td>{id}</td>
        <td>{vendedor}</td>
        <td>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(codigo)}></i>
        </td>
      </tr>
    </>
  );
}

export default Pedidos;
