import React from "react";
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";
import './styles.css'

const ListProduct = ({ data, setDataToEdit, deleteData }) => {
  return (
    <table className="table table-bordered table-striped table-hover table-responsive{-sm|-lg} table-sm">
      <thead className="table-dark table-head">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Descripción</th>
          <th scope="col">V. Unitario</th>
          <th scope="col">Estado del producto</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((el) => (
            <EditProduct
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              as={Link} to="/productos/editar"
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

export default ListProduct;
