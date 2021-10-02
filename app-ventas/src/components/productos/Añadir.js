import React, { useEffect, useState } from "react";

const initialForm = {
  id: null,
  descripcion: "",
  valor: "",
  estado: "",
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

    if (!form.cliente || !form.vendedor) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
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
    <div>
      <h3>{dataToEdit ? "Editar" : "Añadir"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción del producto"
          onChange={handleChange}
          value={form.descripcion}
        />
        <input
          type="text"
          name="valor"
          placeholder="valor unitario"
          onChange={handleChange}
          value={form.valor}
        />
        <input
          type="text"
          name="estado"
          placeholder="Estado del producto"
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