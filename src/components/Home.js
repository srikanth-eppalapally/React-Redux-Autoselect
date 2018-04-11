import React from "react";
import { connect } from "react-redux";
import MainComponent from './common/MainComponent';
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <MainComponent />
      </div>
    );
  }
}

