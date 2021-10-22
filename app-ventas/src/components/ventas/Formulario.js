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
  code: null,
  quantity: "",
  description: "",
  price: "",
  total: "",
  date: "",
  nit: "",
  customer: "",
  status: "",
  id: "",
  seller: "",
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
      !form.quantity ||
      !form.description ||
      !form.price ||
      !form.total ||
      !form.date ||
      !form.nit ||
      !form.customer ||
      !form.status ||
      !form.id ||
      !form.seller
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
              name="quantity"
              placeholder="Cant"
              onChange={handleChange}
              value={form.quantity}
            />
          </Col>
          <Col sm={5} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="description"
              placeholder="Detalle"
              onChange={handleChange}
              value={form.description}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="price"
              placeholder="Valor unitario"
              onChange={handleChange}
              value={form.price}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="total"
              placeholder="Valor total"
              onChange={handleChange}
              value={form.total}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="status"
              placeholder="Estado Venta"
              onChange={handleChange}
              value={form.status}
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
              name="date"
              placeholder="Fecha(DD-MM-YY)"
              onChange={handleChange}
              value={form.date}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="nit"
              placeholder="Documento"
              onChange={handleChange}
              value={form.nit}
            />
          </Col>
          <Col sm={3} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="customer"
              placeholder="Nombre del Cliente"
              onChange={handleChange}
              value={form.customer}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="id"
              placeholder="Id Vendedor"
              onChange={handleChange}
              value={form.id}
            />
          </Col>
          <Col sm={2} className="px-2">
            <FormControl
              size="sm"
              type="text"
              name="seller"
              placeholder="Nombre Vendedor"
              onChange={handleChange}
              value={form.seller}
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
