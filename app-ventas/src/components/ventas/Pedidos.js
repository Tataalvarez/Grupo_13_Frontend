import React from "react";
//import "./Pedidos.css";

const Pedidos = ({ el, setDataToEdit, deleteData }) => {
  let {
    id_venta,
    total,
    id_vendedor,
    cantidad,
    precio,
    fecha,
    documento,
    cliente,
    vendedor,
    estado,
  } = el;
  return (
    <>
      <tr>
        <td>{id_venta}</td>
        <td>{total}</td>
        <td>{id_vendedor}</td>
        <td>{cantidad}</td>
        <td>{precio}</td>
        <td>{fecha}</td>
        <td>{documento}</td>
        <td>{cliente}</td>
        <td>{vendedor}</td>
        <td>{estado}</td>
        <td>
          <i className="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i className="fas fa-trash-alt" onClick={() => deleteData(id_venta)}></i>
        </td>
      </tr>
    </>
  );
};

export default Pedidos;
