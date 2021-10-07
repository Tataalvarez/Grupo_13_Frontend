import axios from "axios";
import React, { useEffect, useState } from "react";

const Busqueda = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [buscar, setBuscar] = useState('');

  const peticionGet = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsuarios(response.data);
        setTablaUsuarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = tablaUsuarios.filter((elemento) => {
      if ( elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ){
        return elemento;
      } else {
        return resultadoBusqueda;
      }
    });
    setUsuarios(resultadoBusqueda);
  }

  const handleChange = (e) => {
    setBuscar(e.target.value);
    filtrar(e.target.value);
  }

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="container">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={buscar}
          placeholder="Busqueda por Nombre o Empresa"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID_venta</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Sitio web</th>
              <th>Ciudad</th>
              <th>Empresa</th>
            </tr>
          </thead>

          <tbody>
            {usuarios &&
              usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.phone}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.website}</td>
                  <td>{usuario.address.city}</td>
                  <td>{usuario.company.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Busqueda;
