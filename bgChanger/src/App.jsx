import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";

function App() {
  const [color, setColor] = useState("green");

  return (
    <div className="bg-red-500 w-full h-screen" style={{ backgroundColor: color }}>
      <div className="btn_container fixed flex flex-wrap justify-center gap-3 w-fit bg-white h-fit bottom-12 m-auto inset-x-4 rounded-xl">
        <MyButton clr="red" onClick={() => { setColor("red") }} />
        <MyButton clr="blue" onClick={() => { setColor("blue") }} />
        <MyButton clr="green" onClick={() => { setColor("green") }} />
        <MyButton clr="yellow" onClick={() => { setColor("yellow") }} />
        <MyButton clr="purple" onClick={() => { setColor("purple") }} />
        <MyButton clr="orange" onClick={() => { setColor("orange") }} />
        <MyButton clr="pink" onClick={() => { setColor("pink") }} />
        <MyButton clr="teal" onClick={() => { setColor("teal") }} />
        <MyButton clr="brown" onClick={() => { setColor("brown") }} />
      </div>
    </div>
  );
}

export default App;
