import React from "react";
import InputField from "../component/Input";

type RenderInputProps = {
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  errorMessage: string;
  key: string;
};

function createFormFieldConfig(
  label: string,
  name: string,
  type: string,
  defaultValue = "",
) {
  return {
    renderInput: (
      handleChange: (event: React.FormEvent<HTMLInputElement>) => void,
      value: string,
      isValid: boolean,
      error: string,
      key: string,
    ) => {
      return (
        <InputField
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
