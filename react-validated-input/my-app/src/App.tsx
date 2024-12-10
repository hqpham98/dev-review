import { useState } from "react";
import { ValidatedInput } from "./ValidatedInput";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  let message = "";

  if (!password) {
    message = "A password is required.";
  } else if (password.length < 8) {
    message = "Your password is too short.";
  }

  return (
    <>
      <p>Password</p>
      <ValidatedInput onChange={setPassword} />
      <p>{message}</p>
      <p>{password.length}</p>
      <p>Password: {password}</p>
    </>
  );
}

export default App;
