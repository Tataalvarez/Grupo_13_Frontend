// Modulos
import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

// Componentes
import ListProduct from "./ListProduct";
import "./Products.css";
//import { useTable } from 'react-table';

const Products = ({ dataBase }) => {
  const [db, setDb] = useState(dataBase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id '${id}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Container className="mt-2">
      <Card className="card">
        <Card.Header className="titulo">Lista de Productos</Card.Header>
        <Card.Body className="text-center">
          <ListProduct
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </Card.Body>
        <Card.Footer>
          <Button 
            as={Link} to="/productos/nuevo" 
            variant="success" 
            className="btn btn-sm" 
            type="submit"
            dataToEdit={dataToEdit}
            createData={createData}
            updateData={updateData}
          >
            Agregar Producto
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Products;
