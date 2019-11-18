import React from "react";
import { useInput } from "./useInput";

// INPUT COMPONENT
const Input = ({ validate, initialValue = "", errorMessage, name }) => {
  const { error, ...inputProps } = useInput({ validate, initialValue });
  return (
    <div>
      <label className="input-block">
        {name.toUpperCase()}:
        <input {...inputProps} />
      </label>
      {error && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

// "CONTAINER"
export const CustomInput = () => {
  const emailValidation = val => val.split("@").length > 1;
  const nameValidation = val => val.length >= 3;

  return (
    <div className="custom-form">
      <Input
        name="email"
        validate={emailValidation}
        errorMessage="Invalid email"
      />
      <Input
        name="name"
        validate={nameValidation}
        errorMessage="Name too short"
      />
      <Input
        name="surname"
        validate={nameValidation}
        errorMessage="Surname too short"
      />
    </div>
  );
};
