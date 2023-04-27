import "./ContactSection.scss";
import Btn from "./common/Btn";
import Separator from "./common/Separator";
import Navbar from "./Navbar";
import React, { useState, FormEvent, ChangeEvent } from "react";
import FormInput from "./common/FormInput";

const web3formsToken = import.meta.env.VITE_REACT_APP_WEB3FORMS;

interface inputsT {
  tag: "input" | "textarea";
  inputName: string;
  type: "text" | "email";
}

const inputs: inputsT[] = [
  { tag: "input", inputName: "name", type: "text" },
  { tag: "input", inputName: "email", type: "email" },
  { tag: "textarea", inputName: "message", type: "text" },
];

interface inputStateT {
  [key: string]: string;
}

const formInitialState: inputStateT = {};

inputs.map((v) => (formInitialState[v.inputName] = ""));

const ContactSection = function () {
  const [formInput, setFormInput] = useState<inputStateT>(formInitialState);
  const [isInvalid, setIsInvalid] = useState<inputStateT>(formInitialState);

  const handleInvalid = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setIsInvalid((prevState) => ({ ...prevState, [target.id]: "invalid" }));
  };

  const handleChange = function (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void {
    const target = e.target;
    setFormInput((prevState) => ({ ...prevState, [target.id]: target.value }));

    if (!target.validity.valid) return;

    setIsInvalid((prevState) => ({ ...prevState, [target.id]: "" }));
  };

  const contentInputJSX = inputs.map((v, i) => {
    return (
      <FormInput
        key={i}
        tag={v.tag}
        name={v.inputName}
        type={v.type}
        value={formInput[v.inputName]}
        validation={isInvalid[v.inputName]}
        onChange={handleChange}
      />
    );
  });

  return (
    <>
      <Separator hide={true} />
      <div className="contact-section">
        <div className="cta-container">
          <h1 className="title">Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form
          // onSubmit={handleSubmit}
          onInvalid={handleInvalid}
          action="https://api.web3forms.com/submit"
          method="post"
        >
          <input type="hidden" name="access_key" value={web3formsToken} />
          {contentInputJSX}
          <Btn onClick={() => null}>Send Message</Btn>
        </form>
      </div>
      <Separator />
      <Navbar />
    </>
  );
};

export default ContactSection;
