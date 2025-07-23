import { useForm } from "react-hook-form";
import "./LoginPage.css";
import axios from "../Utils/axios";
import { useContext } from "react";
import { Usercontext } from "./Wrapper";

const UserForm = () => {
  const [userData, setuserData] = useContext(Usercontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Form Data:", data);
    try {
      const res = await axios.post("/user", {
        userName: data.username,
        userEmail: data.email,
        password: data.password,
      });
      console.log("✅ Success:", res.data);
      setuserData(res.data);
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
        Submit
      </button>
    </form>
  );
};

export default UserForm;
