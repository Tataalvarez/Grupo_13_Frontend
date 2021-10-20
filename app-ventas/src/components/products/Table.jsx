import React from "react";
import Product from "./Product";

const Table = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="mt-5 text-center">

            <h3>Listado de productos</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Estado del producto</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="5">Sin datos</td>
                        </tr>
                    ) : (
                        data.map((el) => (
                            <Product
                                key={el.id}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>

    );
};

export default Table;