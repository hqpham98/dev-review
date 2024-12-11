import { FormEvent } from "react";
import { useState } from "react";

export function RegistrationFormControlled() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Controlled:", { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          onChange={(e) => setUser(e.currentTarget.value)}
          name="username"
        />
      </label>
      <label>
        Password:
        <input
          onChange={(e) => setPass(e.currentTarget.value)}
          name="password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
