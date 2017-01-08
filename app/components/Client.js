// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import SystemPane from './SystemPane';
import ChatPane from './ChatPane';
import styles from './Client.css';


export default class Client extends Component {
  props: {
    channels: object,
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.paneLeft}>
          <SystemPane />
        </div>
        <div className={styles.paneCenter}>
          <ChatPane messages={ this.props.channels['#fun'] } />
        </div>
      </div>
    );
  }
}
