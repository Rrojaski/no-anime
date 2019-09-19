import React, { Fragment, useEffect } from "react";

import styles from "./Modal.module.scss";
import "../../variables.scss";

import Paragraph from "../Paragraph/Paragraph";

const Modal = props => {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");
    const cancel = document.getElementById("cancel");
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
  });
  return (
    <Fragment>
      <div
        className={`${styles.Modal} ${styles[props.className]}`}
        id={props.id}
      >
        <form action="#" className={`${styles.modal__form}`}>
          <div>
            <Paragraph size="lg">Login</Paragraph>
          </div>
          <div>
            <input type="email" className={`${styles.modal__email}`} required />
            <input
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
              Don't have an account yet? <a href="#">Register now!</a>
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
