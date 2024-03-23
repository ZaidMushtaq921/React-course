import React, { useState } from "react";
import userContext from "./UserContext";
function UserContextProvider({ children }) { // it  is a provider that provides the context to its child
  const [user, setUser] = useState(null);
  return (
      <userContext.Provider value={{ user, setUser }}> 
       {/* // it  provide the state and function to manipulate the state */}
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
