import { useNavigate } from "react-router-dom";

// Context
import { useGeneralContext } from "../../contexts/GeneralContext";

import "./Home.scss";

const Home = () => {
  const { users } = useGeneralContext(); // All users list state
  const navigate = useNavigate();

  /********************************************
       Navigate to profile page on click
  ********************************************/
  const navigateToProfile = (id: number) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__header">
          <p>Select an account</p>
        </div>
        <div className="home__body">
          {users &&
            users.map((user) => (
              <div className="user-list" key={user?.id} onClick={() => navigateToProfile(user.id)}>
                <img src={user?.profilepicture} alt="" />
                <span>{user?.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
