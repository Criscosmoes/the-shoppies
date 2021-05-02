import React, { useEffect } from "react";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//helper functions

import { fetchMovies } from "../actions";

// components

import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";
import MyList from "./MyList";

const App = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies("avengers");
  });

  return (
    <div className="main--container">
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <MiddleSection />
        </Route>
        <Route path="/mylist" exact>
          <NavBar />
          <MyList />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { fetchMovies })(App);
