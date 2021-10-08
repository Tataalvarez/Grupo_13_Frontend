import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";

const initialForm = {
  id_venta: null,
  cantidad: "",
  detalle: "",
  precio: "",
  total: "",
  id_vendedor: null,
  fecha: "",
  documento: "",
  cliente: "",
  vendedor: "",
  estado: "",
  acciones: "",
};

export function Formulario({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
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
      !form.estado
    ) {
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
    <>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <Form className="pt=2" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={2}>
            <Form.Control
              type="number"
              nane="cantidad"
              placeholder="Cantidad"
              onChange={handleChange}
              value={form.cantidad}
            />
          </Col>
          <Col xs={6}>
            <Form.Control
              type="text"
              nane="detalle"
              placeholder="Detalle de la Venta"
              onChange={handleChange}
              value={form.detalle}
            />
          </Col>
          <Col xs={2}>
            <Form.Control
              type="number"
              nane="precio"
              placeholder="Valor Unitario"
              onChange={handleChange}
              value={form.precio}
            />
          </Col>
          <Col xs={2}>
            <Form.Control
              type="text"
              nane="total"
              placeholder="Valor Total"
              onChange={handleChange}
              value={form.total}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={2}>
            <Form.Control
              type="text"
              nane="fecha"
              placeholder="Fecha"
              onChange={handleChange}
              value={form.fecha}
            />
          </Col>
          <Col xs={6}>
            <Form.Control
              type="text"
              nane="cliente"
              placeholder="Nombre del Cliente"
              onChange={handleChange}
              value={form.cliente}
            />
          </Col>
          <Col xs={2}>
            <Form.Control
              type="text"
              nane="documento"
              placeholder="Documento"
              onChange={handleChange}
              value={form.documento}
            />
          </Col>
          <Col xs={2}>
            <Form.Select
              type="text"
              nane="Estado"
              onChange={handleChange}
              value={form.estado}
            >
              <option value="1">En proceso</option>
              <option value="2">Entregada</option>
              <option value="3">Cancelada</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 5 }}>
            <Button
              className="btn btn-success btn-sm mx-4"
              type="submit"
              value="Enviar"
            >
              Enviar
            </Button>
            <Button
              className="btn btn-secondary btn-sm"
              type="reset"
              value="Limpiar"
              onClick={handleReset}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
