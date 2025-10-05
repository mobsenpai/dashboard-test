import { useNavigate, Link } from "react-router-dom";
import Button from "../elements/Button";
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-full h-[4rem] bg-primary text-primary flex justify-around items-center">
      <h2
        onClick={() => navigate("/")}
        className="text-xl font-bold cursor-pointer"
      >
        Test
      </h2>
      <ul className="flex gap-5">
        <li className="cursor-pointer hover:text-neutral-400 transition-colors duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-neutral-400 transition-colors duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="cursor-pointer hover:text-neutral-400 transition-colors duration-300">
          <Link to="/features">Features</Link>
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        {user ? (
          <>
            <p>{user.name}</p>
            <Button text="Logout" onClick={handleLogout} />
          </>
        ) : (
          <>
            <Button text="Login" onClick={() => navigate("/login")} />
            <Button
              text="Register"
              secondary
              onClick={() => navigate("/register")}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

//NOTE:
// Cout use sticky in header, to make it on top
// better than fixed, because fixed makes the header overlap content
