// @flow
import { CLIENT_MESSAGE_RECEIVED, CLIENT_INITIALIZE, CLIENT_JOIN_CHANNEL } from '../actions/client';
import irc from 'irc';

export default function client(state: Object = { client: null, channels: {} }, action: Object) {
  switch (action.type) {
    case CLIENT_MESSAGE_RECEIVED:
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.to]: [
            // an array of messages
            ...state.channels[action.to],
            // append new message
            {
              to: action.to,
              from: action.from,
              body: action.body,
            }
          ]
        }
      };

    case CLIENT_JOIN_CHANNEL:
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.channel]: [],
        }
      };

    case CLIENT_INITIALIZE:
      return {
        ...state,
        client: action.client,
      };
    default:
      return state;
  }
}