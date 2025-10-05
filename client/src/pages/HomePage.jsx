import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-20 h-full">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-7xl font-bold capitalize text-secondary text-shadow-lg">
          Innovations and you
        </h2>
        <p className="text-[1.2rem] text-neutral-700">
          We create ideas not books
        </p>
      </div>
      <div className="flex flex-row gap-15">
        <Button text="Get Started" onClick={() => navigate("/register")} />
        <Button text="Explore" secondary onClick={() => navigate("/about")} />
      </div>
    </div>
  );
}

export default HomePage;
