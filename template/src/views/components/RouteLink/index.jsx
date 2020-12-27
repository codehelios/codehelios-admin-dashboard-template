import React from "react";
import { Link } from "react-router-dom";

const RouteLink = ({ to = "/", label }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={to}>
      {label}
    </Link>
  );
};

export default RouteLink;
