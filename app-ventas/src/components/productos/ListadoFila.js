import React from "react";

const ListadoFila = ({ el, setDataToEdit, deleteData }) => {
  let {
    id,
    descripcion,
    valor,
    estado,
    acciones,
  } = el;
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{descripcion}</td>
        <td>{valor}</td>
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

export default ListadoFila;
