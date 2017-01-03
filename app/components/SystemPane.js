import React, {Component} from 'react';
import styles from './SystemPane.css';

export default class SystemPane extends Component {
  render() {
    return (
      <div className={styles.systemPane}>
        <div className={styles.list}>
          <span>All chats</span>
          <ul>
            <li className={styles.channel}>nav</li>
            <li>svukel</li>
            <li>zackhall</li>
            <li>rosingha</li>
            <li>dfirth</li>
          </ul>
        </div>
      </div>
    );
  }
}