import React, { Component } from 'react';
import client from 'socket.io-client';
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

        // connect socket
        this.socket = client.connect('http://localhost:8080/');

        this.handleChatRoom = this.handleChatRoom.bind(this);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.currentUser !== prevState.currentUser) {
            this.socket.emit('setSocketID', this.state.currentUser.id);
        }
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
                    <ConversationList handleChatRoom={this.handleChatRoom} socket={this.socket} currentUser={this.state.currentUser}/>
                </div>

                {
                    this.state.currentChatRoomData &&
                    <div className="scrollable content">
                        <Fade>
                            <MessageList
                                chatRoomData={this.state.currentChatRoomData}
                                currentUser={this.state.currentUser}
                                socket={this.socket}
                            />
                        </Fade>
                    </div>
                }
            </div>
        );
    }
}