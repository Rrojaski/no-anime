import React, { Fragment } from "react";

import styles from "./Home.module.scss";

// Components
import { Row, Col } from "../../../components/Grid/Grid";
import Paragraph from "../../../components/Paragraph/Paragraph";

function Home() {
  return (
    <Fragment>
      <div className={`${styles.Home}`}>
        <Row>
          <Col>
            <Paragraph>Home</Paragraph>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Home;
