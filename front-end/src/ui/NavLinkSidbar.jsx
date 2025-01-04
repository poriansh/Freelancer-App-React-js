import { HomeIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

function NavLinkSidbar() {
  return (
    <NavLink
      to="/owner/dashbord"
      className="flex items-center gap-2 hover:bg-pramery-100/50 hover:text-pramery-900 px-2 py-1.5 rounded-lg transition-all duration-200"
    >
      <HomeIcon className="w-5 h-5" />
      <span>داشبورد</span>
    </NavLink>
  );
}

export default NavLinkSidbar;
