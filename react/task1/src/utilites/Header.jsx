import React from "react";
import { BrowserRouter, useNavigate, useNavigation } from "react-router-dom";
import {data} from "../assets/assets.js"

export default function Header() {
  const nav = useNavigate();
  use
   
    return (
      <div
        className={`w-100 mt-4 rounded-3 border-bottom border-2`}
        style={{ }}
      >
        <ul className={`d-flex justify-content-around  nav my-2 fs-4`}>
          <li onClick={() => nav(`/`)} className={``}>
            Home
          </li>
          <li onClick={() => nav(`Contact`)}>Contact</li>
          <li onClick={() => nav(`About`)}>About</li>
        </ul>
      </div>
    );
}
