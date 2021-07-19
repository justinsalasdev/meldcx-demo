import genClass from "../../helpers/genClass";
import Login from "../Login/Login";
export default function App() {
  const $ = genClass({ block: "app" });

  return (
    <div {...$()}>
      <Login />
    </div>
  );
}
