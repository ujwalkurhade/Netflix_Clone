import React, { useEffect, useState } from "react";
import f1 from "../assets/Images/tv.png";
// import data1 from "../data.js";
import data from "../data.json";

function Feture() {
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    setdata1(data.data);
  }, []);
  return (
    <div className="feture">
      {data1.map((e) => {
        return (
          <>
            <h2> {e.h2}</h2>
            <p>{e.p}</p>
            <img src={e.img}></img>
          </>
        );
      })}
    </div>
  );
}

export default Feture;
