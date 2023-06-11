import React, { useEffect, useState } from "react";
import data from "../data.json";
import SatartBtn from "./SatartBtn";
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
      {data2.map((e) => {
        console.log(e);
        return (
          <div className="accordion">
            <div
              className=" acoridio_header"
              onClick={handlClick}
              key={e.id}
            >
              <h2>{e.title}</h2>
              {open ? <p>× </p> : <p>+</p>}
            </div>

            {open ? (
              <div className="accordion_body">
                <p>{e.desc}</p>
              </div>
            ) : null}
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
