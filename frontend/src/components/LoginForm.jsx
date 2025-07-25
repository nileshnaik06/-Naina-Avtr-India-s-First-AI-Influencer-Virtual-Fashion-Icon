import { useForm } from "react-hook-form";
import "./CSS/LoginPage.css";
import { useContext } from "react";
import { Usercontext } from "./Wrapper";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [userData, setuserData] = useContext(Usercontext);
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const axios = (await import("../Utils/axios")).default;

      const res = await axios.post("/user", {
        userName: data.username,
        userEmail: data.email,
        password: data.password,
      });

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      setuserData(res.data);
      nav("/");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
    reset();
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

      <button type="submit" className="formButton">
        Login
      </button>
    </form>
  );
};

export default UserForm;
