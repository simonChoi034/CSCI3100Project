import React, { Component } from 'react';
import ConversationSearch from '../conversation_search/ConversationSearch';
import ConversationListItem from '../conversation_list_item/ConversationListItem';
import Toolbar from '../messager_toolbar/Toolbar';
import ToolbarButton from '../messager_toolbar_button/ToolbarButton'
import axios from 'axios';

import './ConversationList.css';

export default class ConversationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conversations: []
        };
    }

    componentDidMount() {
        this.getConversations();
    }

    getConversations = () => {
        axios.post('/api/messenger/get_conversation_list').then(response => {
            this.setState(prevState => {
                let conversations = response.data.map(result => {
                    return {
                        userID: result.user_id,
                        name: result.username,
                        email: result.email,
                        chatRoomID: result.c_id,
                    };
                });

                return { ...prevState, conversations };
            });
        });
    }

    render() {
        return (
            <div className="conversation-list">
                <Toolbar
                    title="Messenger"
                    leftItems={[
                        <ToolbarButton key="cog" icon="ion-ios-cog" />
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