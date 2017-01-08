import irc from 'irc';

export const CLIENT_INITIALIZE = 'CLIENT_INITIALIZE';
export const CLIENT_JOIN_CHANNEL = 'CLIENT_JOIN_CHANNEL';
export const CLIENT_MESSAGE_RECEIVED = 'CLIENT_MESSAGE_RECEIVED';

export function messageReceived(from, to, body) {
  return {
    type: CLIENT_MESSAGE_RECEIVED,
    from: from,
    to: to,
    body: body,
  };
};

export function clientJoinChannel(channel) {
  return {
    type: CLIENT_JOIN_CHANNEL,
    channel: channel,
  };
}

export function clientInitialize() {
  return (dispatch) => {
    const client = new irc.Client('chat.freenode.net', 'ack-chat', {
      channels: ['#fun'],
    });

    dispatch({
      type: CLIENT_INITIALIZE,
      client: client,
    });

    dispatch(clientJoinChannel('#fun'));

    client.addListener('message', (from, to, body) => {
      console.log(body);
      dispatch(messageReceived(from, to, body));
    });
  };
};