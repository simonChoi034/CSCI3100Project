import React, { Component } from 'react';
import ConversationList from '../conversation_list/ConversationList';
import MessageList from '../message_list/MessageList';
import './Messenger.css';
import {authenticationService} from "../auth/authentication.service";
import {Role} from "../helper";
import { Fade } from 'reactstrap';

export default class Messenger extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentChatRoomData: null,
        };

        this.handleChatRoom = this.handleChatRoom.bind(this);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    handleChatRoom(data){
        this.setState({
            currentChatRoomData: data
        });
    }

    render() {
        return (
            <div className="messenger">
                <div className="scrollable sidebar">
                    <ConversationList handleChatRoom={this.handleChatRoom}/>
                </div>

                {
                    this.state.currentChatRoomData &&
                    <div className="scrollable content">
                        <Fade>
                            <MessageList
                                chatRoomData={this.state.currentChatRoomData}
                                currentUser={this.state.currentUser}
                            />
                        </Fade>
                    </div>
                }
            </div>
        );
    }
}