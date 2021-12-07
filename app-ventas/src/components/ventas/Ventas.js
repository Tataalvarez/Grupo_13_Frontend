// Modulos
import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from '../../graphql/user';
//import { v4 as uuidv4 } from "uuid"

// Componentes
import Formulario from "./Formulario";
import Tabla from "./Tabla";
import "./Ventas.css";

const Ventas = () => {
  const { data } = useQuery(GET_USERS);
  // const [ deleteProject ] = useMutation(DELETE_PROJECT);
  const database = useState([]);
  const [db, setDb] = useState(database);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    //data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.ide ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el pedido con code: ${id}?`
    );

    if (isDelete) {
      let newData = data.deleteProject.filter((el) => el.id !== id);
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
            data={data}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </Card.Body> 
      </Card>
    </Container>
  );
}

export default Ventas;
