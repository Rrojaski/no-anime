import React, { Fragment } from "react";

import styles from "./Header.module.scss";

// Components
import { Row, Col } from "../../components/Grid/Grid";
import Search from "../../components/Search/Search";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
function App() {
  return (
    <Fragment>
      <div className={`${styles.Header}`}>
        <Col size="col-1-of-2">
          <Logo width="5rem" fill="$color-secondary" />
          <Nav />
        </Col>
        <Col size="col-1-of-2">
          <Search />
        </Col>
      </div>
    </Fragment>
  );
}

export default App;
