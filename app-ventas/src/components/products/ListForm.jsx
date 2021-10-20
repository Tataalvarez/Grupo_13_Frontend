import axios from "axios";
import React, { useEffect, useState } from "react";

const initialForm = {
  id: null,
  description: "",
  price: "",
  status: "",
};

const ListForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
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

  const url = "mongodb://prmora:joalruva69%2a@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.description || !form.price || !form.status) {
      alert("Datos incompletos");
      return;
    }
    
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    
    handleReset();
    const res = await axios.post(url, form);
    console.log(res);
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
          name="description"
          placeholder="Descripción del producto"
          onChange={handleChange}
          value={form.description}
        />
        <input
          type="text"
          name="price"
          placeholder="Valor unitario"
          onChange={handleChange}
          value={form.price}
        />
        <input
          type="text"
          name="status"
          placeholder="Estado del producto"
          onChange={handleChange}
          value={form.status}
        />
        <input className="btn btn-success btn-sm" type="submit" value="Enviar" />
        <input className="btn btn-secondary btn-sm" type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};
export default ListForm;