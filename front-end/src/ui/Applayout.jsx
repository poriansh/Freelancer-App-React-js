import {Outlet} from "react-router-dom";
import Header from "./Header";
import Sidbar from "./Sidbar";

function Applayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidbar />
      <div className="w-full bg-secondary-100 border-t border-gray-300 overflow-x-auto flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
