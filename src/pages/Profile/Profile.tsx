// 3rd party modules
// import { StaticGoogleMap, Marker } from "react-static-google-map";

// Context
import { useGeneralContext } from "../../contexts/GeneralContext";

import "./Profile.scss";

// Assets
import mapIcon from "./../../images/map.png";

const Profile = () => {
  const { user } = useGeneralContext();

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__left">
          {/* Profile image section */}
          <div className="profile-image">
            <img src={user?.profilepicture} alt="user-profile" />
          </div>
          <p>{user?.name}</p>
          {/* First user data section */}
          <dl>
            {/* User name */}
            <div>
              <dt>Username</dt>
              <dd>{user?.username}</dd>
            </div>
            {/* email */}
            <div>
              <dt>e-mail</dt>
              <dd>{user?.email}</dd>
            </div>
            {/* phone */}
            <div>
              <dt>Phone</dt>
              <dd>{user?.phone}</dd>
            </div>
            {/* website */}
            <div>
              <dt>Website</dt>
              <dd>{user?.website}</dd>
            </div>
          </dl>
          <hr />
          <h2>Company</h2>
          {/* Second user data section */}
          <dl>
            <div>
              <dt>Name</dt>
              <dd>{user?.company?.name}</dd>
            </div>
            <div>
              <dt>catchphrase</dt>
              <dd>{user?.company?.catchPhrase}</dd>
            </div>
            <div>
              <dt>bs</dt>
              <dd>{user?.company?.bs}</dd>
            </div>
          </dl>
        </div>
        <div className="profile__right">
          <h2>Address:</h2>
          <dl>
            <div>
              <dt>Street</dt>
              <dd>{user?.address?.street}</dd>
            </div>
            <div>
              <dt>Suite</dt>
              <dd>{user?.address?.suite}</dd>
            </div>
            <div>
              <dt>City</dt>
              <dd>{user?.address?.city}</dd>
            </div>
            <div>
              <dt>Zipcode</dt>
              <dd>{user?.address?.zipcode}</dd>
            </div>
          </dl>

          {/* Google map section */}

          {/* Since Map is not available without billing adding image as backup */}

          {/* <StaticGoogleMap size="600x600" className="img-fluid" apiKey="AIzaSyBSm584xxbQ3DJ3HCZUbF4vgnUjIC9wIHM">
            <Marker location="6.4488387,3.5496361" color="blue" label="P" />
          </StaticGoogleMap> */}

          <img src={mapIcon} alt="geo-map" />

          {/* Lat long section */}
          <div className="lat-long-container">
            <p>
              Lat: <span>{user?.address?.geo?.lat}</span>
            </p>
            <p>
              Long: <span>{user?.address?.geo?.lng}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
