import genClass from "../../helpers/genClass";
import useLogin from "./useLogin";

import "./login.sass";

export default function Login({ ps, setToken }) {
  const {
    error,
    email,
    password,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit
  } = useLogin(setToken);
  const $ = genClass({ block: "login", ps });
  return (
    <form {...$()} onSubmit={handleSubmit}>
      <p {...$("error")}>{error}</p>
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
        {isLoading ? "---" : "Login"}
      </button>
    </form>
  );
}
