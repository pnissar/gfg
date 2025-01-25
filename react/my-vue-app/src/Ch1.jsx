function Ch1(props) {
  console.log(props.t.f_n);
  return (
    <div style={{ border: "2px solid black", borderRadius: "10px" }}>
      <h1>{props.t.id}</h1>
      <h3>First-name : {props.t.f_n}</h3>
      <h3>Last-name : {props.t.l_n}</h3>
      <h3>Age : {props.t.age}</h3>
      <ul>
        {props.t.hob.map((it) => (
          <li>{it}</li>
        ))}
      </ul>
    </div>
  );
  
}

export default Ch1