import React from "react";
import { useParams } from "react-router-dom";
import { BsChatRight, BsDot } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

// Components
import ChatOpen from "./ChatOpen/ChatOpen";


// Context and Helper Hooks
import { useGeneralContext } from "../../contexts/GeneralContext";
import useComponentVisible from "../../hooks/useOutsideClick";

import "./Chat.scss";

const Chat = () => {
  const { id }: any = useParams();
  const { users } = useGeneralContext();
  const [isOpen, setIsOpen] = React.useState(0);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

   /********************************************
     Opens the repective user chat on click
  ********************************************/
  const showChatDetails = (id: number) => {
    setIsOpen(id);
  };

  return (
    <>
      <div className={`chat ${isComponentVisible ? "open" : ""}`} ref={ref}>
        <div
          className="chat__header"
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        >
          <BsChatRight size={20} className="chat__header__icon" />
          <p>Chats</p>
          <RiArrowDownSLine className={isComponentVisible ? "chat__header__dropdown" : "chat__header__dropdown-open"} />
        </div>
        {isComponentVisible && (
          <div className="chat__contacts">
            {users.map(
              (user, index) =>
                user.id !== parseInt(id) && (
                  <div className="contact-details" onClick={() => showChatDetails(user.id)}>
                    <img src={user?.profilepicture} alt="" />
                    <p>{user?.name}</p>
                    <BsDot className={`${index % 2 === 0 ? "chat__contacts__status" : "chat__contacts__offline"}`} />
                  </div>
                )
            )}
          </div>
        )}
      </div>
      {/* Individual user chat */}
      {!!isOpen && <ChatOpen onClose={() => setIsOpen(0)} id={isOpen}/>}
    </>
  );
};

export default Chat;
