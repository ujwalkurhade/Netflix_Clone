import React, { useEffect, useState } from "react";
import data from "../data.json";
import SatartBtn from "./SatartBtn";
import Accrodion from "./Accrodion";
function Qustionsection() {
  const [data2, setdata2] = useState([]);

  useEffect(() => {
    setdata2(data.data2);
    console.log(data.data2);
  }, []);

  return (
    <div className="qustion">
      <h2>Frequently Asked Questions</h2>
      {data2.map((e, index) => {
        return (
          <div key={index}>
            <Accrodion desc={e.desc} title={e.title} />
          </div>
        );
      })}
      <div className="text">
        <p className="para">
          Ready to watch? Enter your email to create or
          restart your membership.
        </p>
        <div className="email">
          <input placeholder="Email address"></input>
          <SatartBtn />
        </div>
      </div>
    </div>
  );
}

export default Qustionsection;
