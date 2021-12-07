import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputGroup,
  Button,
  Col,
  Row,
  Form,
} from "react-bootstrap";

const initialForm = {
  id: "",
  nombre: "",
  identificacion: "",
  apellido: "",
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

    if (
      !form.nombre ||
      !form.apellido ||
      !form.identificacion
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.code === null) {
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
    <Form onSubmit={handleSubmit}>
      <Row>
        <InputGroup className="mb-3">
          <Col sm={1} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="nombre"
              placeholder="Cant"
              onChange={handleChange}
              value={form.nombre}
            />
          </Col>
          <Col sm={5} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="apellido"
              placeholder="Detalle"
              onChange={handleChange}
              value={form.apellido}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="identificacion"
              placeholder="Valor unitario"
              onChange={handleChange}
              value={form.identificacion}
            />
          </Col>
        </InputGroup>
      </Row>
      <Row>
        <Col>
          <Button size="sm" variant="success" type="submit" value="Enviar">
            Enviar
          </Button>
          <Button
            size="sm"
            variant="secondary"
            type="reset"
            value="Limpiar"
            onClick={handleReset}
          >
            Limpiar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
