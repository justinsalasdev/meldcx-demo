import genClass from "../../helpers/genClass";
import Login from "../Login/Login";
import Devices from "../Devices/Devices";
import createNotifyHandler from "./createNotifyHandler";
import "./app.sass";
import { useEffect, useState } from "react";
export default function App() {
  const $ = genClass({ block: "app" });
  const [appLoading, setLoading] = useState(true);
  const [appToken, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
      setLoading(false);
    } else {
      setLoading(false);
      return;
    }
  }, []);

  function handleLogout() {
    setToken(null);
    localStorage.removeItem("token");
  }

  if (appLoading) {
    return <span>..Loading..</span>;
  }

  if (appToken) {
    return (
      <div {...$()}>
        <Devices ps={$("devices").className} />
        <div {...$("actions")}>
          <button onClick={createNotifyHandler(appToken)}>Notify</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  } else {
    return <Login ps={$("login").className} setToken={setToken} />;
  }
}
