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
    <div className="row mt-5">
      <div className="card">
        <div className="card-head">
          <form className="form-inline col-6">
            <input
              className="mr-sm-2 buscar"
              type="search"
              placeholder="Buscar"
              required
            />
            <button class="btn btn-success btn-sm" type="submit">
              Search
            </button>
          </form>
          <h2 className="text-center">Administrador de Ventas</h2>
          <Formulario
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </div>
        <div className="card-body">
          <Tabla
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
