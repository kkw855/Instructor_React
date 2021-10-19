import React from "react";
import useForm from "../utils/useForm";
import { signupForm } from "../utils/formConfig";
import styled from "styled-components";

const Container = styled.form`
  max-width: 400px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  margin: 20px auto;
  padding: 20px;

  h1 {
    margin: 0 0 20px;
    text-align: center;
  }

  button {
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    width: 150px;
    background: blueviolet;
    color: #fff;
    cursor: pointer;
  }

  button:disabled {
    background: #eee;
    color: #999;
    box-shadow: none;
  }
`;

const SignupForm = () => {
  const { renderFormInputs, isFormValid } = useForm(signupForm);
  return (
    <Container>
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button type="submit" disabled={!isFormValid()}>
        Submit
      </button>
    </Container>
  );
};

export default SignupForm;
