// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import SystemPane from './SystemPane';
import ChatPane from './ChatPane';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.paneLeft}>
          <SystemPane />
        </div>
        <div className={styles.paneCenter}>
          <ChatPane />
        </div>
      </div>
    );
  }
}
