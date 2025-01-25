import React from "react";
import Ch1 from "./Ch1";

function P() {
  return (
    <div>
          <h1 style={{ backgroundColor: "aqua", textAlign: "center" ,padding:"50px"}}>Header</h1>
      <h4>
        Child: <Ch1 />
      </h4>
    </div>
  );
}

export default P;
