import {Outlet} from "react-router-dom";
import Header from "../ui/Header";


function Applayout({children}) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[13rem_1fr]">
      <Header />
      {/* <Sidbar /> */}
      {children}
      <div className="w-full bg-secondary-100 border-t border-gray-300 overflow-x-auto ">
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;
