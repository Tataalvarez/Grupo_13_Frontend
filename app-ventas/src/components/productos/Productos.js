import React, { useState } from "react";
import Añadir from "./Añadir";
import Listado from "./Listado";
//import { useTable } from 'react-table';

const dataBase = [
  {
    id: 1,
    descripcion: "",
    valor: 350,
    estado: "No disponible",
  },
  
];

const Productos = () => {
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
      <h2 className="text-center">Administrador de productos</h2>
      <Añadir
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <Listado
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData} 
      />
    </>
  );
};

export default Productos;