import React, { Fragment } from "react";

import styles from "./Nav.module.scss";

import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <Fragment>
      <ul className={`${styles.Nav} ${styles[props.className]} `}>
        <li className={`${styles.nav__item}`}>
          <Link to="/explore">
            <span>explore</span>
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link to="/movies">
            <span>movies</span>
          </Link>
        </li>
        <li className={`${styles.nav__item}`}>
          <Link to="/recent">
            <span>recentrly added</span>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Nav;
