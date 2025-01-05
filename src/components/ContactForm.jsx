import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

export const initialTasks = [];

export default function ContactForm() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleTaskSubmit(yeniTask) {
    setTasks([yeniTask, ...tasks]);
    toast.success("Yeni task oluşturuldu.");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      id: nanoid(5), //5 karakterli
      title: "",
      description: "",
      people: [],
    },
    mode: "onChange",
  });

  const submitHandler = (data, event) => {
    handleTaskSubmit({ ...data, status: "yapılacak" });
    event.target.reset();
  };

  const validateTitle = (value) => {
    return (
      value.trim().length >= 3 || "Görev başlığı en az 3 karakter olmalıdır."
    );
  };

  const validateDescription = (value) => {
    return value.trim().length >= 10 || "Açıklama en az 10 karakter olmalıdır.";
  };

  return (
    <>
      <form className="taskForm" onSubmit={handleSubmit(submitHandler)}>
        <div className="form-line">
          <label className="input-label" htmlFor="title">
            Başlık
          </label>
          <input
            className="input-text"
            id="title"
            type="text"
            {...register("title", { validate: validateTitle })}
          />
          <p className="input-error">{errors.title?.message}</p>
        </div>

        <div className="form-line">
          <label className="input-label" htmlFor="description">
            Açıklama
          </label>
          <textarea
            className="input-textarea"
            rows="3"
            id="description"
            {...register("description", { validate: validateDescription })}
          ></textarea>
          <p className="input-error">{errors.description?.message}</p>
        </div>

        <div className="form-line">
          <button className="submit-button" type="submit" disabled={!isValid}>
            Kaydet
          </button>
        </div>
      </form>
    </>
  );
}
