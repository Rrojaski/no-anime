import React, { Fragment, useEffect } from "react";

import styles from "./Register.module.scss";

// Components
import { Row, Col } from "../../../components/Grid/Grid";
import Paragraph from "../../../components/Paragraph/Paragraph";

const Register = () => {
  const onChange = () => {};
  useEffect(() => {
    onChange();
  });
  return (
    <Fragment>
      <div className={`${styles.Register}`}>
        <Row>
          <Col>
            <Paragraph>Create an Account</Paragraph>
          </Col>
        </Row>
        <Row>
          <Col>
            <form
              action="http://localhost:5000/api/users"
              method="post"
              className={`${styles.register__form}`}
            >
              <label for="email">E-Mail Address</label>
              <input
                onChange={e => onChange(e)}
                name="email"
                id="email"
                type="email"
                className={`${styles.register__email}`}
                required
              />
              <label for="user">Username</label>
              <input
                id="user"
                name="user"
                type="text"
                className={`${styles.register__user}`}
                required
              />
              <label for="pass">Password</label>
              <input
                id="pass"
                name="pass"
                type="text"
                className={`${styles.register__password}`}
                required
              />
              <label for="pass2">Repeat Password</label>
              <input
                id="pass2"
                name="pass2"
                type="text"
                className={`${styles.register__password}`}
                required
              />
              <div>
                <button>create account</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Register;
