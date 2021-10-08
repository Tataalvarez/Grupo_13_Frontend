// Modulos
import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

// Componentes
import { Formulario } from "./Formulario";
import { Tabla } from "./Tabla";
import "./Ventas.css";

const dataBase = [
  {
    id_venta: 1,
    total: "45",
    valor_total: 450,
    id_vendedor: "2",
    cantidad: 9,
    valor_unitario: 50,
    fecha: "12-08-2020",
    documento: "87453422",
    cliente: "Richar Mora",
    vendedor: "Diana",
    estado: "Cancelada",
  },
  {
    id_venta: 2,
    total: "25",
    valor_total: 400,
    id_vendedor: "3",
    cantidad: 8,
    valor_unitario: 50,
    fecha: "12-08-2020",
    documento: "87453422",
    cliente: "Juan Mora",
    vendedor: "Andrea",
    estado: "En proceso",
  },
  {
    id_venta: 3,
    total: "8",
    valor_total: 350,
    id_vendedor: "4",
    cantidad: 7,
    valor_unitario: 50,
    fecha: "12-08-2020",
    documento: "87453422",
    cliente: "David Mora",
    vendedor: "Tatiana",
    estado: "Entregada",
  },
];

export function Ventas() {
  const [db, setDb] = useState(dataBase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id_venta = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id_venta === data.id_venta ? data : el));
    setDb(newData);
  };

  const deleteData = (id_venta) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id '${id_venta}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id_venta !== id_venta);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <Container className="mt-2">
      <Card border="info home">
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
