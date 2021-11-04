import { FormObj } from "./formConfig";

export type ValidationRule = {
  name: string;
  message: string;
  validate: ValidationFunc;
};

type ValidationFunc = (inputValue: string, formObj: FormObj) => boolean;

export function createValidationRule(
  ruleName: string,
  errorMessage: string,
  validationFunc: ValidationFunc,
) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validationFunc,
  };
}

export function requiredRule(inputName: string): ValidationRule {
  return createValidationRule(
    "required",
    `${inputName} required`,
    (inputValue, inputObj) => inputValue.length !== 0,
  );
}

export function minLengthRule(inputName: string, minCharacters: number) {
  return createValidationRule(
    "minLength",
    `${inputName} should contain atleast ${minCharacters} characters`,
    (inputValue, inputObj) => inputValue.length >= minCharacters,
  );
}

export function maxLengthRule(inputName: string, maxCharacters: number) {
  return createValidationRule(
    "maxLength",
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, inputObj) => inputValue.length <= maxCharacters,
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    "passwordMatch",
    "password do not match",
    (inputValue, formObj) => {
      console.log("패스워드 비교: ", formObj.password.value, inputValue);
      return inputValue === formObj.password.value;
    },
  );
}
