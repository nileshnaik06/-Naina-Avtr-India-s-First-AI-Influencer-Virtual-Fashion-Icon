import { useForm } from "react-hook-form";
import "../components/LoginPage.css";
import UserForm from "../components/LoginForm";

const Login = () => {
  return (
    <div id="Login">
      <div className="left">
        <video
          src="/Assets/Icons and videos/Login_video.mp4"
          autoPlay
          muted
          loop
        ></video>

        <img src="/Assets/Images/loin-mini (1).jpg" alt="Naina Avtr" />
      </div>
      <div className="right">
        <h2>Login</h2>
        <UserForm />
      </div>
    </div>
  );
};

export default Login;
