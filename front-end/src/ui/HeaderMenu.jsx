import {
  ArrowLeftStartOnRectangleIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import {Link} from "react-router-dom";
import useLogout from "../features/Authentication/useLogout";
import { useTheme } from "../../context/ThemeContext";


function HeaderMenu() {
  const {logout} = useLogout();
  const {toggleTheme} = useTheme(); 

  return (
    <div className="flex items-center gap-5">
      <button onClick={toggleTheme} className="flex">
        <SunIcon className="dark:block hidden w-7 h-7 text-pramery-800" />
        <MoonIcon className="dark:hidden block w-7 h-7 text-pramery-800" />
      </button>
      <Link className="flex" to="dashbord">
        <button>
          <UserCircleIcon className="w-7 h-7 text-secondary-600" />
        </button>
      </Link>
      <button onClick={logout} className="flex">
        <ArrowLeftStartOnRectangleIcon className="w-7 h-7 text-secondary-600" />
      </button>
    </div>
  );
}

export default HeaderMenu;
