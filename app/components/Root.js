// @flow
import React, { Component } from 'react';

export default class App extends Component {
  props: {
    clientInitialize: () => void,
    messageReceived: () => void,
    client: any
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  componentWillMount() {
    this.props.clientInitialize();
  }
}