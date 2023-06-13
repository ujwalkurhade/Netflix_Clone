import React, { useState } from "react";

function Accrodion({ title, desc }) {
  const [open, setOpen] = useState(false);
  const handlClick = () => setOpen(!open);
  return (
    <div className="accordion">
      <div
        className=" acoridio_header"
        onClick={handlClick}
      >
        <h2>{title}</h2>
        {open ? <p>× </p> : <p>+</p>}
      </div>

      {open ? (
        <div className="accordion_body">
          <p>{desc}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Accrodion;
