import { InputObj } from "./formConfig";
import { useCallback, useState } from "react";

function useForm(inputObjs: Array<InputObj>) {
  const [form, setForm] = useState<Array<InputObj>>(inputObjs);

  function renderFormInputs() {
    return Object.values(form).map((formObj) => {
      const { value, label, errorMessage, valid, renderInput } = formObj;
      return renderInput(onInputChange, value, valid, errorMessage, label);
    });
  }

  const onInputChange = useCallback((event) => {
    // not yet implemented
  }, []);

  return { renderFormInputs };
}

export default useForm;
