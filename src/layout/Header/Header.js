import React, { Fragment } from "react";

import styles from "./Header.module.scss";

// Components
import { Row, Col } from "../../components/Grid/Grid";
import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import Icon from "../../components/Icon/Icon";

function App() {
  return (
    <Fragment>
      <div className={`${styles.Header}`}>
        <Col className="u-align-middle" size="col-1-of-2">
          <Logo width="5rem" fill="$color-secondary" />
          <Nav />
        </Col>
        <Col className="u-align-middle" size="col-1-of-2">
          <Icon type="person">
            <i class="material-icons">person</i>
          </Icon>
          <Icon type="message">
            <i class="material-icons">message</i>
          </Icon>
          <Search />
        </Col>
      </div>
    </Fragment>
  );
}

export default App;
