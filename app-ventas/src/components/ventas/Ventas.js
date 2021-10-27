// Modulos
import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
//import { v4 as uuidv4 } from "uuid"

// Componentes
import Formulario from "./Formulario";
import Tabla from "./Tabla";

const Ventas = ({dataBase}) => {
  const [db, setDb] = useState(dataBase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.code = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.code === data.code ? data : el));
    setDb(newData);
  };

  const deleteData = (code) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el pedido con code: ${code}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.code !== code);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Container className="mt-2">
      <Card>
        <Card.Header className="text-center text-uppercase">
          Registro de Ventas
        </Card.Header>
        <Card.Body className="px-3">
          <Formulario
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Card.Body>
      
        <Card.Header className="text-center text-uppercase bg='primary">
          Listado de Ventas
        </Card.Header>
        <Card.Body>
        <Tabla
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </Card.Body> 
      </Card>
    </Container>
  );
}

export default Ventas;
