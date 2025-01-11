import {Outlet} from "react-router-dom";
import Header from "../ui/Header";
import Sidbar from "../ui/Sidbar";

function Applayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[13rem_1fr]">
      <Header />
      <Sidbar />
      <div className="w-full bg-secondary-100 border-t border-gray-300 overflow-x-auto flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
