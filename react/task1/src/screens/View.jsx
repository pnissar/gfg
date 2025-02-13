import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function View() {
  const { item } = useLocation().state || {};
  console.log(item);
  return (0);
}
