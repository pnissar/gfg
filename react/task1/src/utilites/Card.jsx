import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
    const nav = useNavigate();
    
    console.log(props.it);
  return (
    <img className={``}
      src={props.it.img}
      onClick={() => nav(`View`, { state: { item: props.it } })}
      alt=""
    />
  );
}
