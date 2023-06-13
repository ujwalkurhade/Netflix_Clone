import React, { useEffect, useState } from "react";
import items from "../data.json";

function Feture() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(items.data);
  }, []);
  return (
    <div>
      {data.map((e) => {
        return (
          <div className="feture" key={e.id}>
            <h2> {e.h2}</h2>
            <p>{e.p}</p>
            <img src={e.img}></img>
          </div>
        );
      })}
    </div>
  );
}

export default Feture;
