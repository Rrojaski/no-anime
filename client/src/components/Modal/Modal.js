import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Modal.module.scss";
import "../../variables.scss";

import Paragraph from "../Paragraph/Paragraph";

const Modal = props => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    close();
    alert("Thank you for logging in!");
    alert(Object.entries(formData));
  };
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");

  const close = () => {
    modal.setAttribute(
      "style",
      "display:block; opacity: 0; transform: translate(-50%, -50%) scale(0.8)"
    );
    setTimeout(() => {
      modal.setAttribute(
        "style",
        "display:none; opacity: 0; transform: translate(-50%, -50%) scale(0.8)"
      );
    }, 500);
    overlay.setAttribute("style", "display: none");
  };
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    const cancel = document.getElementById("cancel");
    const register = document.getElementById("register");
    const close = () => {
      modal.setAttribute(
        "style",
        "display:block; opacity: 0; transform: translate(-50%, -50%) scale(0.8)"
      );
      setTimeout(() => {
        modal.setAttribute(
          "style",
          "display:none; opacity: 0; transform: translate(-50%, -50%) scale(0.8)"
        );
      }, 500);
      overlay.setAttribute("style", "display: none");
    };
    overlay.addEventListener("click", close);
    cancel.addEventListener("click", close);
    register.addEventListener("click", close);
  });
  return (
    <Fragment>
      <div
        className={`${styles.Modal} ${styles[props.className]}`}
        id={props.id}
      >
        <form
          action="#"
          className={`${styles.modal__form}`}
          onSubmit={e => onSubmit(e)}
        >
          <div>
            <Paragraph size="lg">Login</Paragraph>
          </div>

          <div className={`${styles.email__box}`}>
            <label for="email" className={`${styles.email__label}`}>
              E-mail
            </label>
            <input
              onChange={e => onChange(e)}
              name="email"
              id="email"
              type="email"
              className={`${styles.modal__email}`}
              required
            />
          </div>
          <div className={`${styles.password__box}`}>
            <label for="password" className={`${styles.password__label}`}>
              Password
            </label>

            <input
              onChange={e => onChange(e)}
              name="password"
              id="passowrd"
              type="password"
              type="text"
              className={`${styles.modal__password}`}
              required
            />
          </div>

          <div className={`${styles.modal__text}`}>
            <Paragraph>
              You may also login using your AnimeUltima account.
            </Paragraph>
            <Paragraph>
              Don't have an account yet?
              <p
                id="register"
                style={{
                  lineHeight: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  display: "inline-block"
                }}
              >
                <Link to="/register"> Register now!</Link>
              </p>
            </Paragraph>
          </div>
          <div>
            <button className={`${styles.modal__button}`}>login</button>
            <p id="cancel" className={`${styles.modal__button}`}>
              cancel
            </p>
          </div>
        </form>
      </div>
      <div
        id="overlay"
        className={`${styles.modal__overlay}  ${props.className}`}
      ></div>
    </Fragment>
  );
};

export default Modal;
