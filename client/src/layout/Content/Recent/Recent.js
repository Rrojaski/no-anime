import React, { Fragment } from "react";

import styles from "./Recent.module.scss";

// Components
import { Row, Col } from "../../../components/Grid/Grid";
import Paragraph from "../../../components/Paragraph/Paragraph";

function Recent() {
  return (
    <Fragment>
      <div className={`${styles.Recent}`}>
        <Row>
          <Col>
            <Paragraph>Recent</Paragraph>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Recent;
