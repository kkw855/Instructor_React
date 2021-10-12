import React from "react";
import styled from "styled-components";

type InputProps = {
  label: string;
  type: string;
  name: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isValid: boolean;
  value: string;
};

const Container = styled.div``;

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
      {errorMessage && !isValid && <span>{errorMessage}</span>}
    </Container>
  );
};

export default Input;
