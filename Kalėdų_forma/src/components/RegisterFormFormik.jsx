import { Formik, Form } from "formik";
import styled from "styled-components";
import FormikInput from "./FormikInput";

const Container = styled.div`
  width: 500px;
  margin: 10rem auto;
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  background-color: #87e187;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
`;

const StyledField = styled.div`
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #261ff2;
  cursor: pointer;

  &:hover {
    background-color: #1e18c1;
  }
`;

const requiredField = "Laukas būtinas";

const RegisterFormFormik = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          age: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.name) errors.name = requiredField;
          if (!values.surname) errors.surname = requiredField;
          if (!values.age) {
            errors.age = requiredField;
          } else if (values.age < 0) {
            errors.age = "Metai negali būti mažiau nei 0";
          }
          if (!values.email) {
            errors.email = requiredField;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Netinkamas el. pašto formatas";
          }
          if (!values.password) {
            errors.password = requiredField;
          } else if (
            !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
              values.password
            )
          ) {
            errors.password =
              "Slaptažodis turi turėti bent vieną skaičių, didžiąją raidę ir simbolį";
          }

          return errors;
        }}
      >
        <Form>
          <Heading>Christmas Lighting Request Form</Heading>
          <img className="logo" src="https://mport.lt/cdn/shop/products/10046_8ae0f914-b950-4532-ae4a-2cf44adeb9bd.jpg?v=1679383708" width={100} alt="vetbee Logo"/>
          <h3>Are you a current customer?</h3>
          
          <StyledField>
            <FormikInput name="name" label="Name:*" />
          </StyledField>
          <StyledField>
            <FormikInput name="surname" label="Pavardė" />
          </StyledField>
          <StyledField>
            <FormikInput type="email" name="email" label="Email address:*" />
          </StyledField>
          <StyledField>
            <FormikInput type="number" name="phone number" label="Phone number:*" />
          </StyledField>
          <StyledField>
            <FormikInput type="password" name="password" label="Slaptažodis" />
          </StyledField>
          <StyledButton>Registruotis</StyledButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default RegisterFormFormik;