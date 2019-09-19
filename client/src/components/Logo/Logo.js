import React from "react";

import "./Logo.module.scss";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1>No Anime</h1>
    </Link>
  );
};

export default Logo;
