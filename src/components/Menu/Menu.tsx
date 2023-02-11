import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// Context
import { useGeneralContext } from "../../contexts/GeneralContext";

import "./Menu.scss";

type MenuProps = {
  closeMenu: (flag: boolean) => void;
};

const Menu = ({ closeMenu }: MenuProps) => {
  const { id }: any = useParams();
  const { users, user } = useGeneralContext();
  const navigate = useNavigate();

  /********************************************
       Navigate to home page on signout
  ********************************************/
  const redirect = () => {
    closeMenu(false);
    navigate("/");
  };

  /********************************************
     Navigate to profile page on name click
  ********************************************/
  const navigateToUserProfile = (id: number) => {
    closeMenu(false);
    navigate(`/profile/${id}`);
  };

  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__current-user">
          <img src={user?.profilepicture} alt="user-profile" />
          <p>{user?.name}</p>
          <span>{user?.email}</span>
        </div>
        <div className="menu__userlist">
          {users &&
            users.map(
              (user) =>
                // Condition to exclude the active user
                user.id !== parseInt(id) && (
                  <div className="user-list" key={user?.id} onClick={() => navigateToUserProfile(user.id)}>
                    <img src={user?.profilepicture} alt="" />
                    <span>{user?.name}</span>
                  </div>
                )
            )}
        </div>
        <button className="btn-signout" onClick={redirect}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default React.memo(Menu);
