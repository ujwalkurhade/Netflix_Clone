import React, { useEffect, useState } from "react";
import data from "../data.json";

function Feture() {
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    setdata1(data.data);
  }, []);
  return (
    <div>
      {data1.map((e) => {
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
