import React, { useState } from "react";
import {
  BrowserRouter,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { data } from "../assets/assets.js";
import "./Header.css";

export default function Header() {
  const nav = useNavigate();
  const [ac, sac] = useState("");
  const location = useLocation();

  const hc = (page) => {
    sac(page);
    nav(`/${page}`);
  };

  console.log(location);
  return (
    <div
      className={`w-100 mt-4`}
      style={{
        borderBottom: "3px solid #133E87",
      }}
    >
      <ul className={`d-flex justify-content-around  nav  fs-5`}>
        <li
          onClick={() => hc("")}
          className={location.pathname === "/" ? "h" : ""}
        >
          Home
        </li>
        <li
          onClick={() => hc("Contact")}
          className={location.pathname === "/Contact" ? "h" : ""}
        >
          Contact
        </li>
        <li
          onClick={() => hc("About")}
          className={location.pathname === "/About" ? "h" : ""}
        >
          About
        </li>
      </ul>
    </div>
  );
}
