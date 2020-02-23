import React, { Component, Fragment } from 'react';
import BJP from "./Bjp";
import AAP from "./Aap";
class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Higher Order Component</h1>
        <BJP candidate="Manoj Tiwari" />
        <AAP candidate="Arvind Kejariwal" />
      </Fragment>
    )
  }
}

export default App
