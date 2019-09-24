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
              <div className={`${styles.register__group}`}>
                <input
                  onChange={e => onChange(e)}
                  name="email1"
                  id="email1"
                  type="email"
                  placeholder=" "
                  className={`${styles.register__email}`}
                  required
                />
                <label className={`${styles.register__label}`} for="email1">
                  E-Mail Address
                </label>
              </div>
              <div className={`${styles.register__group}`}>
                <input
                  id="user"
                  name="user"
                  type="text"
                  placeholder=" "
                  className={`${styles.register__user}`}
                  required
                />
                <label className={`${styles.register__label}`} for="user">
                  Username
                </label>
              </div>
              <div className={`${styles.register__group}`}>
                <input
                  placeholder=" "
                  id="pass"
                  name="pass"
                  type="text"
                  className={`${styles.register__password}`}
                  required
                />
                <label className={`${styles.register__label}`} for="pass">
                  Password
                </label>
              </div>
              <div className={`${styles.register__group}`}>
                <input
                  placeholder=" "
                  id="pass2"
                  name="pass2"
                  type="text"
                  className={`${styles.register__password}`}
                  required
                />
                <label className={`${styles.register__label}`} for="pass2">
                  Repeat Password
                </label>
              </div>
              <div>
                <button className={`${styles.register__button}`}>
                  create account
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Register;
