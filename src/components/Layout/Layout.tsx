import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

// Components
import Chat from "../Chat/Chat";
import Header from "../Header/Header";
import LeftMenu from "../LeftMenu/LeftMenu";

// Context
import { useGeneralContext } from "../../contexts/GeneralContext";

// Helper Service and models
import { IUser } from "../../utils/model/users";

import "./Layout.scss";

const Layout = () => {
  const { users, setUser } = useGeneralContext(); // All users list state and set signle user function
  const { id } = useParams(); // Current active user id
  const navigate = useNavigate();

  /**
   * @function getCurrentActiveUser
   * @description Function to filter out the list of users and get active user or navigate if no results
   * @param id Current active user id
   * @param users List of all users in the sys
   * @author navya.y
   */
  const getCurrentActiveUser = (id: string | undefined, users: IUser[]) => {
    if (users && users.length > 0 && id) {
      const userData = users.filter((user: IUser) => user.id === parseInt(id));
      if (userData.length > 0) {
        setUser(userData[0]);
      } else {
        navigate("/404");
      }
    }
  };

  React.useEffect(() => {
    getCurrentActiveUser(id, users);
  }, [id, users]);

  return (
    <div className="layout">
      <div className="layout__container">
        <div className="layout__container--left">
          <LeftMenu />
        </div>
        <div className="layout__container--right">
          <Header />
          <Outlet />
          <div className="layout__chat__container">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
