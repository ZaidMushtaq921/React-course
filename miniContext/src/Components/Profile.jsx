import React, { useContext } from "react";
import userContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div> Please Login</div>;
  return <div>welcome {user.email}</div>;
}

export default Profile;
