import React from "react";

export default function Task({ list }) {
  return (
    <div>
      <ul>
        {list.map((it) => (
          <li>{it}</li>
        ))}
      </ul>
    </div>
  );
}
