import React, {Component} from 'react';
import styles from './ChatPane.css';

export default class ChatPane extends Component {
  render() {
    return (
      <div className={styles.chatPane}>
        <div className={styles.messages}>
          <ul>
            <li>
              <div className={styles.user}>zackhall</div>
              <div className={styles.message}>Hello!</div>
            </li>
            <li>
              <div className={styles.user}>svukel</div>
              <div className={styles.message}>Welcome to Ack Chat!</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}