import React, { Fragment } from "react";

import styles from "./Movies.module.scss";

// Components
import { Row, Col } from "../../../components/Grid/Grid";
import Paragraph from "../../../components/Paragraph/Paragraph";

function Movies() {
  return (
    <Fragment>
      <div className={`${styles.Movies}`}>
        <Row>
          <Col>
            <Paragraph>Anime Movies</Paragraph>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Movies;
