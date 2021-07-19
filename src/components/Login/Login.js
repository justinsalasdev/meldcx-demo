import genClass from "../../helpers/genClass";
import { useState } from "react";
import "./login.sass";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    try {
      const endPoint = "http://35.201.2.209:8000/login";

      const options = {
        method: "POST",
        "Content-type": "Application/json",
        body: JSON.stringify({ email, password }),
      };

      const res = await fetch(endPoint, options);
      const jsonData = await res.json();

      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  }

  const $ = genClass({ block: "login" });
  return (
    <form {...$()} onSubmit={handleSubmit}>
      <input
        {...$("input")}
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        {...$("input")}
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />

      <button type="submit" {...$("action")}>
        Submit
      </button>
    </form>
  );
}
