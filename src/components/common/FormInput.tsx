import "./FormInput.scss";
import React, { ChangeEvent } from "react";

interface propsT {
  tag: "input" | "textarea";
  name: string;
  type: "email" | "text";
  value: string;
  validation: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const FormInput: React.FC<propsT> = function (props) {
  const { name, type, tag, value, validation, onChange } = props;

  const Tag = tag;

  return (
    <div className={`form-input ${validation}`}>
      <Tag
        value={value}
        onChange={onChange}
        placeholder={name[0].toUpperCase() + name.slice(1)}
        type={type}
        id={name}
        name={name}
        required
      />
      {validation ? <div className="invalid-icon">!</div> : ""}
    </div>
  );
};
export default FormInput;
