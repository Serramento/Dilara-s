import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import axios from "axios";

export const initialContacts = [];

export default function ContactForm() {
  const [contacts, setContacts] = useState(initialContacts);

  const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });

  function handleContactSubmit(newContact) {
    setContacts([newContact, ...contacts]);
    toast.success("Tu mensaje ha sido entregado.");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      id: nanoid(5), //5 karakterli
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data, event) => {
    handleContactSubmit({ ...data });
    axiosInstance
      .post("/signup", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        reset();
      })
      .catch((error) => {
        console.error(error.response.message);
      });
    event.target.reset();
  };

  const validateName = (value) => {
    return (
      value.trim().length >= 3 || "El nombre debe tener al menos 3 caracteres"
    );
  };

  const validateSubject = (value) => {
    return (
      value.trim().length >= 3 || "El asunto debe tener al menos 3 caracteres"
    );
  };

  const validateMessage = (value) => {
    return (
      value.trim().length >= 10 ||
      "Su mensaje debe tener al menos 10 caracteres"
    );
  };

  return (
    <>
      <form className="taskForm" onSubmit={handleSubmit(submitHandler)}>
        <div className="form-line">
          <label className="input-label" htmlFor="name">
            Nombre*
          </label>
          <input
            className="input-text"
            id="name"
            type="text"
            {...register("name", { validate: validateName })}
          />
          {<p className="input-error">{errors.name?.message}</p>}
        </div>

        <div className="form-line">
          <label className="input-label" htmlFor="email">
            Correo*
          </label>
          <input
            className="input-text"
            id="email"
            type="text"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message:
                  "El valor ingresado no coincide con el formato de correo electrónico",
              },
            })}
          />
          <p className="input-error">{errors.email?.message}</p>
        </div>

        <div className="form-line">
          <label className="input-label" htmlFor="subject">
            Sujeto*
          </label>
          <input
            className="input-text"
            id="subject"
            type="text"
            {...register("subject", { validate: validateSubject })}
          />
          <p className="input-error">{errors.subject?.message}</p>
        </div>

        <div className="form-line">
          <label className="input-label" htmlFor="message">
            Mesaje*
          </label>
          <textarea
            className="input-textarea"
            rows="6"
            id="description"
            {...register("message", { validate: validateMessage })}
          ></textarea>
          <p className="input-error">{errors.message?.message}</p>
        </div>

        <div className="form-line">
          <button className="submit-button" type="submit" disabled={!isValid}>
            ENTREGAR
          </button>
        </div>
      </form>
    </>
  );
}
