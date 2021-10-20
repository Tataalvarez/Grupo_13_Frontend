// Modulos
import React, { useState } from "react";

// Componentes
import ListForm from "./ListForm";
import Table from "./Table";
import './Products.css'
//import { useTable } from 'react-table';

const Productos = ({dataBase}) => {
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
  } 

  return (
    <>
    {/* <div className="buscar">
        <input id="input" type="text" placeholder="Buscar" required/>
        <div id="btn-buscar">
            <i className="fas fa-search"></i>
        </div>
    </div> */}
    <div className="card">
        <div className="card-body">
            <h2 className="text-center">Administrador de productos</h2>
            <ListForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />
            <Table
                data={db} 
                setDataToEdit={setDataToEdit} 
                deleteData={deleteData} 
            />
        </div>
    </div>
    </>
  );
};

export default Productos;