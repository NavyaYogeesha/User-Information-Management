import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile/Profile";
import Posts from "./pages/Posts/Posts";
import Gallery from "./pages/Gallery/Gallery";
import Todo from "./pages/Todo/Todo";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

// Context
import { GeneralContext } from "./contexts/GeneralContext";

// Helper Service and models
import { sendGetRequest } from "./utils/requestController";
import { IUser } from "./utils/model/users";

import "./App.scss";

function App() {
  const [users, setUsers] = React.useState([]); // State to store list of all users
  const [user, setUser] = React.useState<IUser | undefined>(); // Selected account detail

  /**
   * @function getUsersList
   * @description Function to get all the list of users or accounts via API call
   * @method Get
   * @needs sendGetRequest Axios get method helper
   * @author navya.y
   */
  const getUsersList = async () => {
    const url = "https://panorbit.in/api/users.json";
    const result = await sendGetRequest(url);
    if (result) {
      setUsers(result.users);
    }
  };

  React.useEffect(() => {
    getUsersList();
  }, []);

  return (
    <BrowserRouter>
      <GeneralContext.Provider value={{ users, user, setUser }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/"
            element={<Layout />}
            children={
              <>
                <Route path="/profile/:id" element={<Profile />} />
                {/* Have separate url instead of coming soon for future usecase */}
                <Route path="/posts/:id" element={<Posts />} />
                <Route path="/gallery/:id" element={<Gallery />} />
                <Route path="/todo/:id" element={<Todo />} />
              </>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </GeneralContext.Provider>
    </BrowserRouter>
  );
}

export default App;
