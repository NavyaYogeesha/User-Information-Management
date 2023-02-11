import React from "react";
import { VscClose } from "react-icons/vsc";
import { IoSend } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";

// Context and helper functions
import { useGeneralContext } from "../../../contexts/GeneralContext";
import useComponentVisible from "../../../hooks/useOutsideClick";
import { IUser } from "../../../utils/model/users";

import "./ChatOpen.scss";

type ChatOpenProps = {
  id: number;
  onClose: () => void;
};

function ChatOpen({ onClose, id }: ChatOpenProps) {
  const { users } = useGeneralContext();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const [user, setUser] = React.useState<IUser | undefined>(); // Selected account detail

  /**
   * @function getCurrentActiveUser
   * @description Function to filter out the list of users and get active user or navigate if no results
   * @param id Current active user id
   * @param users List of all users in the sys
   * @author navya.y
   */
  const getCurrentActiveUser = (id: number, users: IUser[]) => {
    if (users && users.length > 0 && id) {
      const userData = users.filter((user: IUser) => user.id === id);
      if (userData.length > 0) {
        setUser(userData[0]);
      }
    }
  };

  React.useEffect(() => {
    getCurrentActiveUser(id, users);
  }, [id, users]);

  return (
    <>
      <div className={`chat chat-open ${isComponentVisible ? "open" : ""}`} ref={ref}>
        <div
          className="chat__header"
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        >
          <img src={user?.profilepicture} alt="chat-profile" className="chat-profile" />
          <p className="chat-name">{user?.name}</p>
          <RiArrowDownSLine className={isComponentVisible ? "chat__header__dropdown" : "chat__header__dropdown-open"} />
          <VscClose className="chat__header__dropdown-close" onClick={onClose} />
        </div>
        {isComponentVisible && (
          <>
            <div className="chat__contacts">
              <div className="chat__container icon-left">
                <p>Lorem ipsum dolor, sit amet </p>
              </div>
              <div className="chat__container ">
                <p>Lorem ipsum dolor, sit amet </p>
              </div>
              <span>9:16 PM</span>
              <div className="chat__container icon-right">
                <p>Lorem ipsum dolor, sit amet </p>
              </div>
              <div className="chat__container ">
                <p>Lorem ipsum dolor, sit amet </p>
              </div>
              <span>9:56 PM</span>
              <div className="chat__container icon-left">
                <p>Lorem ipsum dolor, sit amet </p>
              </div>
              <div className="chat__container ">
                <p>Lorem ipsum dolor, sit amet </p>
              </div>
            </div>
            <div className="chat-text">
              <input type="text" />
              <IoSend className="chat__header__dropdown-close" onClick={onClose} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ChatOpen;
