import React, { useEffect, useState } from "react";
import {
  Form,
  InputGroup,
  Col,
  FormControl,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

const initialForm = {
  id: null,
  description: "",
  price: "",
  status: "",
};

const CreateProduct = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);
  const [isChecked, setIsChecked] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.description || !form.price) {
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

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container className="mt-2">
      <Card className="card">
        <Card.Header className="titulo">{dataToEdit ? "Editar" : "Agregar"} Productos</Card.Header>
        <Card.Body className="text-center">
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <Col sm={6} className="px-2">
                <FormControl
                  size="sm"
                  type="text"
                  name="description"
                  placeholder="Descripción del producto"
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
              <Col>
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  placeholder="Estado"
                  value={form.status}
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                {isChecked ? "Disponible" : "No Disponible"}
              </Col>
              <Col>
                <Button
                  className="btn btn-success btn-sm"
                  type="submit"
                  value="Enviar"
                  as={Link} to="/productos/listar"
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateProduct;
