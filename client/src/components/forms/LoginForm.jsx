import { Link, useNavigate } from "react-router-dom";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    const dummyUser = { name: "John Doe", email: "johndoe@example.com" };
    login(dummyUser);

    //change route after that, (implement actual logic later)
    navigate("/dashboard");
  }
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 items-center border-2 border-neutral-400 p-5 rounded-lg">
        <h2 className="font-bold text-xl">Welcome Back</h2>
        <form className="flex flex-col gap-3 w-full">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
          />
          <Input
            name="pass"
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
        </form>
        <Link to="/forgotpassword" className="text-left">
          Forgot password?
        </Link>
        <Button text="Login" onClick={handleLogin} className="w-full p-2" />
        <button>Google login here</button>
        <Link to="/register">
          Don't have an account?&nbsp;
          <span className="hover:border-b border-primary">Create new</span>
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;

// NOTE
// w-full inherits the width from parent, meaning this height will get inherited by input component which also has w-full
