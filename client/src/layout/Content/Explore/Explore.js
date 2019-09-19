import React, { Fragment } from "react";

import styles from "./Explore.module.scss";

// Components
import { Row, Col } from "../../../components/Grid/Grid";
import Paragraph from "../../../components/Paragraph/Paragraph";

function Explore() {
  return (
    <Fragment>
      <div className={`${styles.Explore}`}>
        <Row>
          <Col>
            <Paragraph>Explore</Paragraph>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Explore;
