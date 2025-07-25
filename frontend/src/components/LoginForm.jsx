import { useForm } from "react-hook-form";
import "./CSS/LoginPage.css";
import { useContext, useState } from "react";
import { Usercontext } from "./Wrapper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserForm = () => {
  const [userData, setuserData] = useContext(Usercontext);
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Submitting..."); // shows loading toast
    try {
      const axios = (await import("../Utils/axios")).default;

      const res = await axios.post("/user", {
        userName: data.username,
        userEmail: data.email,
        password: data.password,
      });

      toast.update(toastId, {
        render: "Registered successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      setuserData(res.data);
      nav("/");
    } catch (err) {
      toast.update(toastId, {
        render: "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.error("Error submitting form:", err);
    } finally {
      reset();
    }
  };

  return (
    <form action="POST" onSubmit={handleSubmit(onSubmit)}>
      {/* Username */}
      <div>
        <label>Username</label>
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
        <label>Email</label>
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

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          placeholder="Enter Your password"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="text-red-400 font-[smallText] text-[.88em]">
            {errors.password.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={loading} className="formButton">
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
};

export default UserForm;
