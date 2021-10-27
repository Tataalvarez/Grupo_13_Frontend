import React, { useEffect, useState } from "react";
import { Form, InputGroup, Col, FormControl, Button } from "react-bootstrap";

const initialForm = {
  id: null,
  nombre: "",
  rol: "",
  estado: "",
};

const CreateUsers = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
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

  // const url = "mongodb://prmora:joalruva69%2a@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

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
    // const res = await axios.post(url, form);
    // console.log(res);
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="titulo">{dataToEdit ? "Editar" : "Añadir"}</h3>
      <InputGroup className="mb-3">
        <Col sm={3} className="px-2">
          <FormControl
            size="sm"
            type="text"
            name="nombre"
            placeholder="Nombre del Usuario"
            onChange={handleChange}
            value={form.nombre}
          />
        </Col>
        <Col sm={2} className="px-2">
          <FormControl
            size="sm"
            type="text"
            name="rol"
            placeholder="Vendedor/Administrador"
            onChange={handleChange}
            value={form.rol}
          />
        </Col>
        <Col sm={2} className="px-2">
          <FormControl
            size="sm"
            type="text"
            name="estado"
            placeholder="Estado"
            onChange={handleChange}
            value={form.estado}
          />
        </Col>
        <Col>
          <Button
            className="btn btn-success btn-sm"
            type="submit"
            value="Enviar"
          >
            Enviar
          </Button>
          <Button
            className="btn btn-secondary btn-sm"
            type="submit"
            value="Enviar"
            onClick={handleReset}
          >
            Limpiar
          </Button>
        </Col>
      </InputGroup>
    </Form>
  );
};

export default CreateUsers;
