import React, { useState } from "react";
import Formulario from "./Formulario";
import Tabla from "./Tabla";
//import { useTable } from 'react-table';

const dataBase = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const Pedidos = () => {
  const [db, setDb] = useState(dataBase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con el id '${id}?`
    );

    if(isDelete){
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };


  return (
    <>
      <h2 className="text-center">Administrador de Ventas</h2>
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
    </>
  );
};

export default Pedidos;
