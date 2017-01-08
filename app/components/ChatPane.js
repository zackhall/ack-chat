import React, {Component} from 'react';
import styles from './ChatPane.css';
import irc from 'irc';

export default class ChatPane extends Component {
  props: {
    messages: object[],
  };

  render() {
    const messages = this.props.messages.map(message => (
      <li>
        <div className={styles.user}>{message.from}</div>
        <div className={styles.message}>{message.body}</div>
      </li>
    ));

    return (
      <div className={styles.chatPane}>
        <div className={styles.messages}>
          <ul>
            {messages}
          </ul>
        </div>
      </div>
    );
  }
}