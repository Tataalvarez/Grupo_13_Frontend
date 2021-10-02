import React from 'react'

const Usuarios = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="mt-5 text-center">
      <h3>GESTIÓN DE USUARIOS</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado del usuario</th>
          </tr>
        </thead>
    
      </table>
    </div>
  );
};
export default Usuarios