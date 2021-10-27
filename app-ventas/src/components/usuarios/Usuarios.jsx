// Modulos
import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

// Componentes
import ListUsers from "./ListUsers";

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
      `Estas seguro de eliminar el usuario: '${id}?`
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
      <Card>
        <Card.Header className="text-center text-uppercase">
          Listado de Productos
        </Card.Header>
        <Card.Body>
          <ListUsers
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Products;
