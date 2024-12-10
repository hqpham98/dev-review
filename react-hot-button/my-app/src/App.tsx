import { useState } from "react";
import { Button } from "./Button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setbgColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#FFFFFF");

  function handleClick() {
    setCount(count + 1);
    if (count + 1 === 3) {
      setbgColor("#351C75");
    }
    if (count + 1 === 6) {
      setbgColor("#674FA7");
    }
    if (count + 1 === 9) {
      setbgColor("#E06666");
    }
    if (count + 1 === 12) {
      setbgColor("#F6B26B");
      setTextColor("#000000");
    }
    if (count + 1 === 15) {
      setbgColor("#FFFF00");
    }
    if (count + 1 === 18) {
      setbgColor("#FFFFFF");
    }
  }

  return (
    <>
      <Button onClick={handleClick} bgColor={bgColor} textColor={textColor} />
      <p>{count}</p>
    </>
  );
}

export default App;
