import React from "react";

const TablaFila = ({ el, setDataToEdit, deleteData }) => {
  let {
    id,
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
        <td>{id}</td>
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
          <i class="far fa-edit" onClick={() => setDataToEdit(el)}></i>
          <i class="fas fa-trash-alt" onClick={() => deleteData(id)}></i>
        </td>
      </tr>
    </>
  );
};

export default TablaFila;
