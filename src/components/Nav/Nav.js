import React, { Fragment, useEffect } from "react";

import styles from "./Nav.module.scss";

import { Link } from "react-router-dom";

const Nav = props => {
  useEffect(() => {
    let item = document.getElementsByTagName("li");

    Array.prototype.forEach.call(item, function(b) {
      b.addEventListener("click", createRipple);
    });

    function createRipple(e) {
      let circle = document.createElement("div");
      this.appendChild(circle);

      let d = Math.max(this.clientWidth, this.clientHeight);

      circle.style.width = circle.style.height = d + "px";

      let rect = this.getBoundingClientRect();
      circle.style.left = e.clientX - rect.left - d / 2 + "px";
      circle.style.top = e.clientY - rect.top - d / 2 + "px";

      console.log(this);

      circle.setAttribute("class", `${styles.ripple} `);
    }
  });
  return (
    <Fragment>
      <ul className={`${styles.Nav} ${styles[props.className]} `}>
        <li className={`${styles.nav__item}`}>
          <Link to="/explore">
            <p>explore</p>
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link to="/movies">
            <p>movies</p>
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link to="/recent">
            <p>recentrly added</p>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Nav;
