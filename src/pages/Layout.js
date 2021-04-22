import React from "react";
import { Link } from "react-router-dom";

import "./layout.css";

export default function Layout(props) {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {props.children}
    </>
  );
}
