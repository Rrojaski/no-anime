import React, { Fragment } from "react";

import styles from "./Search.module.scss";

const Search = props => {
  return (
    <Fragment>
      <div className={`${styles.Search} ${styles[props.className]} `}>
        <form className={`${styles.search__form}`}>
          <input
            id="search"
            name="search"
            type="text"
            className={`${styles.search__input} ${styles.input__text}`}
          />
          <button className={`${styles.search__button}`}>Search</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
