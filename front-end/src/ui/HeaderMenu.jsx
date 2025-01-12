import {
  ArrowLeftStartOnRectangleIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import useLogout from "../features/Authentication/useLogout";

function HeaderMenu() {
  const { logout } = useLogout();
  return (
    <div className="flex items-center gap-5">
      <button className="flex">
        <SunIcon className="w-7 h-7 text-pramery-800" />
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
