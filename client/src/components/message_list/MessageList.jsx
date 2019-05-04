import React, {Component} from 'react';
import Compose from '../message_compose/Compose';
import Toolbar from '../messager_toolbar/Toolbar';
import ToolbarButton from '../messager_toolbar_button/ToolbarButton';
import Message from '../message/Message';
import moment from 'moment';
import axios from 'axios';

import './MessageList.css';

export default class MessageList extends Component {
    constructor(props) {
        super(props);

        // initialize the states for this component
        this.state = {
            messages: [],
        };

        // bind this method to pass it to child components
        this.handleSubmit = this.handleSubmit.bind(this);

        const self = this;
        this.props.socket.on('receive_massage', function (data) {
            self.addMessage(data);
        })
    }

    // get all message history when the component is mounted
    componentDidMount() {
        this.getMessages();
    }

    // update the chatroom when the component is updated
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.chatRoomData !== prevProps.chatRoomData) {
            this.getMessages();
        }
    }

    // get messages from socket
    getMessages = () => {
        const self = this;
        const data = {
            chatRoomID: this.props.chatRoomData.chatRoomID,
            currentUser: this.props.currentUser
        };

        this.props.socket.emit("initChatRoom", data);
        this.props.socket.on("initChatRoom", function (response) {
            self.setState({
                messages: response
            });
        })
    };

    // add new message
    addMessage = (data) => {
        console.log(data);
        this.setState({
            messages: [...this.state.messages, data]
        });
    };

    // render message to the chatroom
    renderMessages() {
        let i = 0;
        let messageCount = this.state.messages.length;
        let messages = [];

        while (i < messageCount) {
            let previous = this.state.messages[i - 1];
            let current = this.state.messages[i];
            let next = this.state.messages[i + 1];
            let isMine = current.author === this.props.currentUser.id;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = false;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            messages.push(
                <Message
                    key={i}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                />
            );

            // Proceed to the next message.
            i += 1;
        }

        return messages;
    }

    // handler for submission(sending) of message
    handleSubmit(value) {
        const self = this;
        const data = {
            chatRoomID: this.props.chatRoomData.chatRoomID,
            targetUserId: this.props.chatRoomData.userID,
            currentUser: this.props.currentUser,
            message: value
        };

        this.props.socket.emit('send_massage', data);
    }

    render() {
        return (
            <div>
                <div className="message-list">
                    <Toolbar
                        title={this.props.chatRoomData.name}
                        rightItems={[
                            <ToolbarButton key="info" icon="ion-ios-information-circle-outline"/>,
                            <ToolbarButton key="video" icon="ion-ios-videocam"/>,
                            <ToolbarButton key="phone" icon="ion-ios-call"/>
                        ]}
                    />

                    <div className="message-list-container">{this.renderMessages()}</div>

                </div>

                <Compose
                    rightItems={[
                        <ToolbarButton key="photo" icon="ion-md-arrow-round-up"/>,
                    ]}
                    submit={this.handleSubmit}
                />
            </div>
        );
    }
}