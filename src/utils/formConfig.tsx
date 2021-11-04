import React from "react";
import Input from "../component/Input";
import {
  maxLengthRule,
  minLengthRule,
  passwordMatchRule,
  requiredRule,
  ValidationRule,
} from "./inputValidationRules";

type RenderInput = (
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  isValid: boolean,
  error: string,
  key: string,
) => JSX.Element;

export type InputObj = {
  renderInput: RenderInput;
  label: string;
  name: string;
  value: string;
  valid: boolean;
  errorMessage: string;
  touched: boolean;
  validationRules: ValidationRule[];
};

export type FormObj = {
  [key: string]: InputObj;
};

function createFormFieldConfig(
  label: string,
  name: string,
  type: string,
  validationRules: ValidationRule[],
  defaultValue = "",
): InputObj {
  return {
    renderInput: (
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
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
    name,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
    validationRules: validationRules,
  };
}

// object representation of signup form
export const signupForm: FormObj = {
  name: {
    ...createFormFieldConfig("Full Name", "name", "text", [
      requiredRule("name"),
      minLengthRule("name", 3),
      maxLengthRule("name", 25),
    ]),
  },
  email: {
    ...createFormFieldConfig("Email", "email", "email", [
      requiredRule("email"),
      minLengthRule("email", 10),
      maxLengthRule("email", 25),
    ]),
  },
  password: {
    ...createFormFieldConfig("Password", "password", "password", [
      requiredRule("password"),
      minLengthRule("password", 8),
      maxLengthRule("password", 20),
    ]),
  },
  confirmPassword: {
    ...createFormFieldConfig(
      "Confirm Password",
      "confirmPassword",
      "password",
      [passwordMatchRule()],
    ),
  },
};

export const createCourseForm = (id: string, description: string) => {
  return {
    id: {
      ...createFormFieldConfig(
        "Id",
        "id",
        "number",
        [requiredRule("id"), minLengthRule("id", 3), maxLengthRule("id", 25)],
        id,
      ),
    },
    description: {
      ...createFormFieldConfig(
        "Description",
        "description",
        "text",
        [
          requiredRule("description"),
          minLengthRule("description", 10),
          maxLengthRule("description", 25),
        ],
        description,
      ),
    },
  };
};
