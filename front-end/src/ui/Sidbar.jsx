import {ClipboardDocumentCheckIcon} from "@heroicons/react/20/solid";
import {HomeIcon} from "@heroicons/react/20/solid";
import {NavLink} from "react-router-dom";

function Sidbar() {
  return (
    <div className=" row-span-2 row-start-1 p-4 border-l border-gray-300">
      <ul className="flex flex-col gap-3">
        <li>
          <CustomNavlink to="/owner/dashbord">
            <HomeIcon className="w-5 h-5" />
            <span>داشبورد</span>
          </CustomNavlink>
        </li>
        <li>
          <CustomNavlink to="/owner/projects">
            <ClipboardDocumentCheckIcon className="w-5 h-5" />
            <span>لیست پروژه ها</span>
          </CustomNavlink>
        </li>
      </ul>
    </div>
  );
}

export default Sidbar;

function CustomNavlink({children, to}) {
  const classNavLinK =
    "flex items-center gap-2 hover:bg-pramery-100/50 hover:text-pramery-900 px-2 py-1.5 rounded-lg transition-all duration-200";
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        isActive ? `${classNavLinK} text-pramery-900 bg-pramery-100/50` : classNavLinK
      }
    >
      {children}
    </NavLink>
  );
}
