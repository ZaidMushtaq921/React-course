import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider > 
      {/* // it  provides the user data to all child components of this component */}
      <h2>React + Vite</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
