import { NavLink, useParams } from "react-router-dom";

import "./LeftMenu.scss";

import arrowIcon from "./../../images/right-white.svg";

// List of all options available in left menu
const menuItems = [
  {
    name: "Profile",
    link: "profile",
  },
  {
    name: "Posts",
    link: "posts",
  },
  {
    name: "Gallery",
    link: "gallery",
  },
  {
    name: "ToDo",
    link: "todo",
  },
];

const LeftMenu = () => {
  const { id } = useParams(); // Active user's id

  return (
    <nav className="left-menu">
      <ul>
        {menuItems &&
          menuItems.map((menu) => (
            <li>
              <NavLink to={`${menu.link}/${id}`} className={({ isActive }) => (isActive ? "active" : undefined)}>
                {menu.name}
                <figure>
                  <img src={arrowIcon} alt="" />
                </figure>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
export default LeftMenu;
