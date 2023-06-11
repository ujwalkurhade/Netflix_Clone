import React, { useEffect, useState } from "react";
import data from "../data.json";
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
          <div className="accordion" key={e.id}>
            <div className=" acoridio_header">
              <h2 onClick={handlClick}>{e.title}</h2>
              <p>😊</p>
            </div>

            {open ? (
              <div className="accordion_body">
                <p>{e.desc}</p>
              </div>
            ) : null}
          </div>
        );
      })}

      <p>
        Ready to watch? Enter your email to create or
        restart your membership.
      </p>
    </div>
  );
}

export default Qustionsection;
