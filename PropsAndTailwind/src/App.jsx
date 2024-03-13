import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);

   const myObject1 = {
    about: "I am a developer.",
    btn: " read me"
   }
   const myObject2 = {
    about: "I am a engineer.",
    btn: " Click me"
   }

   const myObject3 = {
    about: "I am a Scientist.",
   }


  return (
    <>
      <Card    object = { myObject1} />
      <br />
      <Card   object = { myObject2} />
      <br />
      <Card   object = { myObject3}  />
    </>
  );
}

export default App;
