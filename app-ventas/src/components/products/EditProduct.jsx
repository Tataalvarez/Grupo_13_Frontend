import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const EditProduct = ({ el, setDataToEdit, deleteData }) => {
  let { id, description, price, status } = el;
  return (
    <Fragment>
      <tr>
        <td>{id}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{status}</td>
        <td>
          <Button onClick={() => setDataToEdit(el)} as={Link} to="/productos/editar"></Button>
          <Button onClick={() => deleteData(id)} as={Link} to="/productos/listar"></Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default EditProduct;
