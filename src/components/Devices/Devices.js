import useSWR from "swr";
import genClass from "../../helpers/genClass";
import "./devices.sass";

const fetcher = (...args) => fetch(...args).then(res => res.json());
export default function Devices({ ps }) {
  const $ = genClass({ block: "devices", ps });
  const { data, error } = useSWR("http://35.201.2.209:8000/devices", fetcher, {
    refreshInterval: 5000
  });

  if (!data && !error) {
    return <div>...loading</div>;
  }

  const numDevices = data.devices.length;
  const circles = [];
  for (let i = 0; i < numDevices; i++) {
    circles.push(<span {...$("circle")} key={i}></span>);
  }

  console.log(data);

  return (
    <div {...$()}>
      <p {...$("count")}>{numDevices}</p>
      <p {...$("desc")}>devices online</p>
      <div {...$("circles")}>{circles}</div>
    </div>
  );
}
