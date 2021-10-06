import React, { useEffect, useState } from "react";

const initialForm = {
  id_venta: null,
  total: "",
  id_vendedor: null,
  cantidad: "",
  precio: "",
  fecha: "",
  documento: "",
  cliente: "",
  vendedor: "",
  estado: "",
  acciones: "",
};

const Formulario = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.total || !form.cantidad || !form.precio || !form.fecha || !form.documento || !form.cliente || !form.vendedor || !form.estado ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id_venta === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="container">
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="total"
          placeholder="Valor Total"
          onChange={handleChange}
          value={form.total}
        />
        <input
          type="text"
          name="id_cliente"
          placeholder="ID vendedor"
          onChange={handleChange}
          value={form.id_vendedor}
        />
        <input
          type="text"
          name="cantidad"
          placeholder="Cantidad"
          onChange={handleChange}
          value={form.cantidad}
        />
        <input
          type="text"
          name="precio"
          placeholder="Valor Unitario"
          onChange={handleChange}
          value={form.precio}
        />
        <input
          type="text"
          name="fecha"
          placeholder="Fecha DD-MM-AA"
          onChange={handleChange}
          value={form.fecha}
        />
        <input
          type="text"
          name="documento"
          placeholder="Documento"
          onChange={handleChange}
          value={form.documento}
        />
        <input
          type="text"
          name="cliente"
          placeholder="Nombre del Cliente"
          onChange={handleChange}
          value={form.cliente}
        />
        <input
          type="text"
          name="vendedor"
          placeholder="Nombre del Vendedor"
          onChange={handleChange}
          value={form.vendedor}
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado"
          onChange={handleChange}
          value={form.estado}
        />
        <input className="btn btn-success btn-sm" type="submit" value="Enviar" />
        <input className="btn btn-secondary btn-sm" type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};
export default Formulario;
