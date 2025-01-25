import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Lp() {
  const it = ["hello", "world", "Nissar"];
  const nav = useNavigate();
    return (
        it.map((item)=>
            <h1 onClick={() => nav(`Sub/${item}`, { state: { item } })}>{ item}</h1>
    )
    );
}
