import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./App.scss";

// Layout
import Header from "./layout/Header/Header";
import Home from "./layout/Content/Home/Home";
import Explore from "./layout/Content/Explore/Explore";
import Movies from "./layout/Content/Movies/Movies";
import Recent from "./layout/Content/Recent/Recent";
import Register from "./layout/Content/Register/Register";

// Components
import { Row, Col } from "./components/Grid/Grid";

function App() {
  return (
    <Fragment>
      <Router>
        <div className={`${styles.App}`}>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/movies" component={Movies} />
          <Route path="/recent" component={Recent} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
