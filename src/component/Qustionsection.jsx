import React, { useEffect, useState } from "react";
import data from "../data.json";
import SatartBtn from "./SatartBtn";
import Accrodion from "./Accrodion";
function Qustionsection() {
  const [open, setOpen] = useState(false);
  const [data2, setdata2] = useState([]);

  useEffect(() => {
    setdata2(data.data2);
    console.log(data2);
  }, []);
  const handlClick = () => setOpen(!open);

  return (
    <div className="qustion">
      <h2>Frequently Asked Questions</h2>
      {data2.map((e, index) => {
        console.log(e);
        return <Accrodion desc={e.desc} title={e.title} />;
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
