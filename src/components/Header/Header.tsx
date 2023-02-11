// Context
import { useGeneralContext } from "../../contexts/GeneralContext";

// Hooks
import useComponentVisible from "../../hooks/useOutsideClick";
import { usePathname } from "../../hooks/usePathname";

// Components
import Menu from "../Menu/Menu";

import "./Header.scss";

const Header = () => {
  const module = usePathname(); // Get the module name from the URL
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { user } = useGeneralContext(); // Active user account

  return (
    <header className="header">
      <div className="header__container">
        <p className="module-name">{module}</p>
        <div className="user-profile" onClick={() => setIsComponentVisible(!isComponentVisible)}>
          <img src={user?.profilepicture} alt="profile" />
          <p>{user?.name}</p>
        </div>
      </div>

      {/* Menu dropdown section */}
      {isComponentVisible && (
        <div ref={ref}>
          <Menu closeMenu={(flag) => setIsComponentVisible(flag)} />
        </div>
      )}
      {/* End of  Menu dropdown section */}
    </header>
  );
};
export default Header;
