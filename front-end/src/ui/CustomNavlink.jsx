import { NavLink } from "react-router-dom";

function CustomNavlink({children, to}) {
  const classNavLinK =
    "flex items-center gap-2 hover:bg-pramery-100/50 hover:text-pramery-900 px-2 py-1.5 rounded-lg transition-all duration-200";
  return (
    <li>
      <NavLink
        to={to}
        className={({isActive}) =>
          isActive ? `${classNavLinK} text-pramery-900 bg-pramery-100/50` : classNavLinK
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink