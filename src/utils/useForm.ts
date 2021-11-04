import { FormObj, InputObj } from "./formConfig";
import React, { useCallback, useState } from "react";

function useForm(formObj: FormObj) {
  const [form, setForm] = useState(formObj);

  function renderFormInputs() {
    return Object.values(form).map((formObj) => {
      const { value, label, errorMessage, valid, renderInput } = formObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  }

  const isInputFieldValid = useCallback(
    (inputObj: InputObj) => {
      for (const rule of inputObj.validationRules) {
        if (!rule.validate(inputObj.value, form)) {
          inputObj.errorMessage = rule.message;
          return false;
        }
      }

      return true;
    },
    [form],
  );

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const inputObj = { ...form[name] };

      console.log("onInputChange: ", name, value);

      inputObj.value = value;
      const isValidInput = isInputFieldValid(inputObj);

      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }

      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid],
  );

  const isFormValid = useCallback(
    () => Object.values(form).every((inputObj) => inputObj.valid),
    [form],
  );

  return { renderFormInputs, isFormValid };
}

export default useForm;
