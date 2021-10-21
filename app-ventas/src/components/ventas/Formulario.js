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
  codigo: null,
  cantidad: "",
  detalle: "",
  precio: "",
  total: "",
  fecha: "",
  documento: "",
  cliente: "",
  estado: "",
  id: "",
  vendedor: "",
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

    if (
      !form.cantidad ||
      !form.detalle ||
      !form.precio ||
      !form.total ||
      !form.fecha ||
      !form.documento ||
      !form.cliente ||
      !form.estado ||
      !form.id ||
      !form.vendedor
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.codigo === null) {
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
              name="cantidad"
              placeholder="Cant"
              onChange={handleChange}
              value={form.cantidad}
            />
          </Col>
          <Col sm={5} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="detalle"
              placeholder="Detalle"
              onChange={handleChange}
              value={form.detalle}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="precio"
              placeholder="V.Unitario"
              onChange={handleChange}
              value={form.precio}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="total"
              placeholder="V.Total"
              onChange={handleChange}
              value={form.total}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="estado"
              placeholder="Estado Venta"
              onChange={handleChange}
              value={form.estado}
            />
          </Col>
        </InputGroup>
      </Row>
      <Row>
        <InputGroup className="mb-3">
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="fecha"
              placeholder="Fecha(DD-MM-YY)"
              onChange={handleChange}
              value={form.fecha}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="documento"
              placeholder="Documento"
              onChange={handleChange}
              value={form.documento}
            />
          </Col>
          <Col sm={3} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="cliente"
              placeholder="Nombre del Cliente"
              onChange={handleChange}
              value={form.cliente}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="id"
              placeholder="Id del Vendedor"
              onChange={handleChange}
              value={form.id}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="vendedor"
              placeholder="Nombre Vendedor"
              onChange={handleChange}
              value={form.vendedor}
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
