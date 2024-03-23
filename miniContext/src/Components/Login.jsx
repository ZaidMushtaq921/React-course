import React, { useContext } from "react";
import userContext from "../Context/UserContext";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {setUser} = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUser({email, password})
  }
  return (
    <div >
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Log in</button>
    </div>
  );
}

export default Login;
