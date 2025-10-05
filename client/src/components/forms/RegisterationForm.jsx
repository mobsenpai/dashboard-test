import { Link, useNavigate } from "react-router-dom";
import Input from "../elements/Input";
import Button from "../elements/Button";

function RegisterationForm() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-5 items-center border-2 border-neutral-400 p-5 rounded-lg">
        <h2 className="font-bold text-xl">Create Account</h2>
        <form className="flex flex-col gap-3 w-full">
          <Input
            name="username"
            type="text"
            placeholder="Enter your name"
            label="Name"
          />
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
          <Input
            name="confirmpass"
            type="password"
            placeholder="Repeat your password"
            label="Confirm Password"
          />
        </form>
        <Button text="Register" className="w-full p-2" />
        <Link to="/login">
          Already have an account?&nbsp;
          <span className="hover:border-b border-primary">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default RegisterationForm;
