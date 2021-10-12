import React from "react";
import Input from "../component/Input";

type RenderInput = (
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
  value: string,
  isValid: boolean,
  error: string,
  key: string,
) => JSX.Element;

export type InputObj = {
  renderInput: RenderInput;
  label: string;
  value: string;
  valid: boolean;
  errorMessage: string;
  touched: boolean;
};

function createFormFieldConfig(
  label: string,
  name: string,
  type: string,
  defaultValue = "",
): InputObj {
  return {
    renderInput: (
      handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
      value: string,
      isValid: boolean,
      error: string,
      key: string,
    ) => {
      return (
        <Input
          key={key}
          name={name}
          type={type}
          label={label}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
}

// object representation of signup form
export const signupForm = [
  {
    ...createFormFieldConfig("Full Name", "name", "text"),
  },
  {
    ...createFormFieldConfig("Email", "email", "email"),
  },
  {
    ...createFormFieldConfig("Password", "password", "password"),
  },
  {
    ...createFormFieldConfig("Confirm Password", "confirmPassword", "password"),
  },
];
