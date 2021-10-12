import React from "react";
import useForm from "../utils/useForm";
import { signupForm } from "../utils/formConfig";

const SignupForm = () => {
  const { renderFormInputs } = useForm(signupForm);
  return (
    <form>
      <h1>Sign Up</h1>
      {renderFormInputs()}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
