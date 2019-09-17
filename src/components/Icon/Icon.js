import React, { Fragment, useEffect } from "react";

import styles from "./Icon.module.scss";

const Icon = props => {
  useEffect(() => {
    let icon = document.getElementsByTagName("span");

    Array.prototype.forEach.call(icon, function(b) {
      b.addEventListener("click", createRipple2);
    });

    function createRipple2(e) {
      let circle = document.createElement("div");
      this.appendChild(circle);

      let d = Math.max(this.clientWidth, this.clientHeight);

      circle.style.width = circle.style.height = d + "px";

      let rect = this.getBoundingClientRect();
      circle.style.left = e.clientX - rect.left - d / 2 + "px";
      circle.style.top = e.clientY - rect.top - d / 2 + "px";

      console.log(this);

      circle.setAttribute("class", `${styles.ripple2} `);
    }
  });
  return (
    <Fragment>
      <span
        className={`${styles.Icon} ${styles[props.className]} ${
          styles[props.type]
        }`}
      >
        {props.children}
      </span>
    </Fragment>
  );
};

export default Icon;
