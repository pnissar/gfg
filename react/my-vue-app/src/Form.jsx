import React, { useState } from "react";
import Ch3 from "./Ch3.jsx";
import backg from "../public/backg.webp";

export default function () {
  const [n, sn] = useState(null);
  const [b, bn] = useState(null);
  const [c, cn] = useState(null);
  const [p, pn] = useState(null);
  const [r, rn] = useState(null);
  const [data, std] = useState([]);
  const h = () => {
    const obj = {
      name: n,
      course: c,
      batch: b,
      phone: p,
      roll: r,
    };
    console.log(obj);
    std((prev) => [...prev, obj]);
    console.log(data);
    sn("");
    bn("");
    cn("");
    pn("");
    rn("");
  };

  return (
    <div
      style={{
              backgroundImage: `url(${backg})`,
              width: "100vw",
              height: "100vh",
              backgroundSize:"contain",
            
      }}
    >
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => sn(e.target.value)}
        value={n}
          />
          <br />
      <input
        type="text"
        placeholder="Batch"
        onChange={(e) => bn(e.target.value)}
        value={b}
          />
          <br />
      <input
        type="text"
        placeholder="Course"
        onChange={(e) => cn(e.target.value)}
        value={c}
          />
          <br />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => pn(e.target.value)}
        value={p}
          />
          <br />
      <input
        type="text"
        placeholder="Roll"
        onChange={(e) => rn(e.target.value)}
        value={r}
          />
          <br />

      <button onClick={h}>Click-Me</button>
      {data.map((e) => (
        <Ch3 t={e} />
      ))}
    </div>
  );
}
