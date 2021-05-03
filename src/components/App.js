import React, { useEffect } from "react";
import "../App.scss";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

//helper functions

import { fetchMovies, localStorageList } from "../actions";

// components

import NavBar from "./NavBar";
import MiddleSection from "./MiddleSection";
import MyList from "./MyList";

const App = ({ fetchMovies, localStorageList }) => {
  const checkLocal = () => {
    if (localStorage.getItem("nominationList")) {
      // change nomination list to memory
      localStorageList(JSON.parse(localStorage.getItem("nominationList")));

      // loop through and check if our current search
    } else {
      const nominationList = [];
      localStorage.setItem("nominationList", JSON.stringify(nominationList));
    }
  };

  useEffect(() => {
    fetchMovies("avengers");
    checkLocal();
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

export default connect(mapStateToProps, { fetchMovies, localStorageList })(App);
