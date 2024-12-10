import { useState } from "react";
import "./App.css";
import { ToggleSwitch } from "./ToggleSwitch";

function App() {
  const [power, setPower] = useState(true);

  return (
    <>
      <ToggleSwitch power={power} onClick={() => setPower(!power)} />
      <p>{power.toString()}</p>
    </>
  );
}

export default App;
