import { Outlet } from "react-router-dom";
import Header from "../components/primary/Header";

function MainLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
//NOTE: not needed to add flex-1, but just added it for more clarity
