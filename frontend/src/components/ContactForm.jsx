import React from "react";
import "../components/CSS/ContactSection.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitContact = (data) => {
    console.log(data);
    toast.success("Submitted sucessfully", {
      autoClose: 3000,
    });
    reset;
  };

  return (
    <div className="contact-form-container">
      <form
        className="contact-form"
        onSubmit={() => handleSubmit(submitContact)}
      >
        <div>
          <input
            placeholder="Enter Your name"
            type="text"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-400 font-[smallText] text-[.88em]">
              {errors.username.message}
            </p>
          )}
        </div>
        {/* Email */}
        <div>
          <input
            placeholder="Enter Your email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-400 font-[smallText] text-[.88em]">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Type your message"
            type="text"
            rows="4"
            {...register("textMessage", {
              required: "textMessage is required",
            })}
          ></textarea>
        </div>

        <button type="submit">
          <span className="arrow"></span> Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
