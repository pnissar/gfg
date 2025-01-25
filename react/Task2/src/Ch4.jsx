import React, { useEffect, useState } from "react";

export default function Ch4() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  return (
    <div>
      <h1>Fetched Data</h1>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
