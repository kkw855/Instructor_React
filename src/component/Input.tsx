import React from "react";
import styled from "styled-components";

type InputProps = {
  label: string;
  type: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isValid: boolean;
  value: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    margin-bottom: 6px;
    font-size: 1.1rem;
  }

  input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #777;
    background-color: #eee;
    outline: none;
    font-size: 1.1rem;
    box-sizing: border-box;
    margin-bottom: 8px;
  }

  .error {
    color: red;
  }
`;

const Input = ({
  errorMessage,
  handleChange,
  isValid,
  label,
  name,
  type,
  value,
}: InputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </Container>
  );
};

export default Input;
