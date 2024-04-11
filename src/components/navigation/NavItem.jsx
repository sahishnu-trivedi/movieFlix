import { NavLink, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useContext } from "react";

export default function NavItem({path, label}) {
  const {clicked, setClicked, openMenu, setOpenMenu} = useContext(GlobalContext);

  const toggleHamurgerMenu = () => {
    setClicked(!clicked);
    setOpenMenu(!openMenu)
}

  return (
    <li className="nav-item mb-4">
        <NavLink to={path} onClick={toggleHamurgerMenu} className={({ isActive }) => {
            return `lg:text-7xl sm:text-5xl text-4xl font-extrabold uppercase ${isActive ? 'nav-item-active' : 'nav-item-inactive'} `
          }}>{label}
        </NavLink>
    </li>
  )
}
