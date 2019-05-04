import React, { Component } from 'react';
import moment from 'moment';
import './Message.css';

export default class Message extends Component {
  render() {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp
    } = this.props;

    // create timestamp
    const friendlyTimestamp = moment(data.timestamp).format('LLLL');

    // render content
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.message }
          </div>
        </div>
      </div>
    );
  }
}