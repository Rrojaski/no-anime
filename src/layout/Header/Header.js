import React, { Fragment, useEffect } from "react";

import styles from "./Header.module.scss";

// Components
import { Row, Col } from "../../components/Grid/Grid";
import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import Icon from "../../components/Icon/Icon";
import Modal from "../../components/Modal/Modal";

function App() {
  useEffect(() => {
    const person = document.getElementById("person");
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    person.addEventListener("click", function() {
      modal.setAttribute(
        "style",
        "display:block; opacity: 0; transform: translate(-50%, -50%) scale(.8)"
      );
      setTimeout(() => {
        modal.setAttribute(
          "style",
          "display:block; opacity: 1; transform: translate(-50%, -50%) scale(1)"
        );
      }, 100);
      overlay.setAttribute("style", "display: block");
    });
  });
  return (
    <Fragment>
      <Modal id="modal" />
      <div className={`${styles.Header}`}>
        <Col className="u-align-middle" size="col-1-of-2">
          <Logo width="5rem" fill="$color-secondary" />
          <Nav />
        </Col>
        <Col className="u-align-middle" size="col-1-of-2">
          <Icon type="message">
            <i class="material-icons">message</i>
          </Icon>
          <Icon id="person" type="person">
            <i class="material-icons">person</i>
          </Icon>
          <Search />
        </Col>
      </div>
    </Fragment>
  );
}

export default App;
