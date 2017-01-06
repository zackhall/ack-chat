import React, {Component} from 'react';
import styles from './ChatPane.css';
import irc from 'irc';

export default class ChatPane extends Component {
  constructor () {
    super();
    this.state = {
      client: new irc.Client('chat.freenode.net', 'ack-chat', {
        channels: ['#fun'],
      }),
      messages: [],
    };
  }

  render() {
    const messages = this.state.messages.map(message => (
      <li>
        <div className={styles.user}>{message.from}</div>
        <div className={styles.message}>{message.message}</div>
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

  componentDidMount() {
    this.state.client.addListener('message', (from, to, message) => {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            from: from,
            message: message,
          },
        ]
      });
    });
  }
}