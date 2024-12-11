import { FormEvent } from "react";

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, password } = Object.fromEntries(formData.entries());
    console.log("Uncontrolled:", { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" />
      </label>
      <label>
        Password:
        <input name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
