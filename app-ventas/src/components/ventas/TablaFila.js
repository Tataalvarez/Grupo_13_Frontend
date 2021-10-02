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
    acciones,
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
        <td>{acciones}</td>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setDataToEdit(el)}
          >
            Editar
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteData(id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default TablaFila;
