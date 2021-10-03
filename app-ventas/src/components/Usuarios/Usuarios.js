import React from "react";

const Usuarios = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="text-center">
            <h3>GESTIÓN DE USUARIOS</h3>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Estdo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Vendedor</td>
                  <td>Autorizado</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Administrador</td>
                  <td>Pendiente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Usuarios;
