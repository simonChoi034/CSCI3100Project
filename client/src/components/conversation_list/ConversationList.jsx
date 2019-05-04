import React, { Component } from 'react';
import ConversationSearch from '../conversation_search/ConversationSearch';
import ConversationListItem from '../conversation_list_item/ConversationListItem';
import Toolbar from '../messager_toolbar/Toolbar';
import ToolbarButton from '../messager_toolbar_button/ToolbarButton'

import './ConversationList.css';

export default class ConversationList extends Component {
    constructor(props) {
        super(props);
        // initialize the states for this component
        this.state = {
            conversations: []
        };
    }

    // initialze the chatlist when this component is mounted
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentUser !== prevProps.currentUser) {
            this.props.socket.emit('initChatList', this.props.currentUser);
            this.getConversations()
        }
    }


    // get conversations from socket
    getConversations = () => {
        this.props.socket.on("initChatList", response => {

            this.setState(prevState => {
                let conversations = response.map(result => {
                    return {
                        userID: result.user_id,
                        name: result.username,
                        email: result.email,
                        chatRoomID: result.c_id,
                    };
                });

                return { ...prevState, conversations };
            });
        })
    }

    render() {
        return (
            <div className="conversation-list">
                <Toolbar
                    title="Messenger"
                    leftItems={[
                        <ToolbarButton key="close" icon="ion-ios-close-circle-outline" onClick={this.props.handleChatRoom} />
                    ]}
                    rightItems={[
                        <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
                    ]}
                />
                <ConversationSearch />
                {
                    this.state.conversations.map(conversation =>
                        <ConversationListItem
                            key={conversation.user_id}
                            data={conversation}
                            handleChatRoom={this.props.handleChatRoom}
                        />
                    )
                }
            </div>
        );
    }
}