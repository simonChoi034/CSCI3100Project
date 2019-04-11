import React, {Component} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default class ConversationListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.data.name,
        };
    }

    componentDidMount() {
        shave('.conversation-snippet', 20);
    }

    handleClick(){
        const data = this.props.data;
        this.props.handleChatRoom(data);
    }

    render() {
        return (
            <div className="conversation-list-item"  onClick={this.handleClick.bind(this)}>
                <img className="conversation-photo"/>
                <div className="conversation-info">
                    <h1 className="conversation-title">{this.state.name}</h1>
                </div>
            </div>
        );
    }
}