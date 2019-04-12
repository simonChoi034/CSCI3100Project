import React, { Component } from 'react';
import client from 'socket.io-client';
import ConversationList from '../conversation_list/ConversationList';
import MessageList from '../message_list/MessageList';
import './Messenger.css';
import {authenticationService} from "../auth/authentication.service";
import {Role} from "../helper";
import { Fade, Button } from 'reactstrap';
import Sidebar from 'react-sidebar';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

export default class Messenger extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentChatRoomData: null,
            sidebarOpen: true
        };

        // collapsable sidebar
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

        // connect socket
        this.socket = client.connect('http://192.168.1.89:8080/');

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

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    mediaQueryChanged() {
        this.setState({
            sidebarDocked: this.mql.matches,
            sidebarOpen: false
        })
    }

    handleChatRoom(data){
        this.setState({
            currentChatRoomData: data
        });
    }

    render() {
        return (
            <div className="messenger">
                <Sidebar
                  sidebar={
                    <div className="scrollable sidebar">
                        <ConversationList handleChatRoom={this.handleChatRoom} socket={this.socket} currentUser={this.state.currentUser}/>
                    </div>
                  }
                  open={this.state.sidebarOpen}
                  onSetOpen={this.onSetSidebarOpen}
                  className="collapse-sidebar"
                >
                    {
                        this.state.currentChatRoomData &&
                        <div className="scrollable content massage-list-container">
                            <Fade>
                                <MessageList
                                    chatRoomData={this.state.currentChatRoomData}
                                    currentUser={this.state.currentUser}
                                    socket={this.socket}
                                />
                            </Fade>
                        </div>
                    }
                    { this.state.sidebarOpen?
                        <button className="toggle-btn opened-sidebar-btn" onClick={() => this.onSetSidebarOpen(false)}>
                            <FaAngleLeft />
                        </button> :
                        <button className="toggle-btn closed-sidebar-btn" onClick={() => this.onSetSidebarOpen(true)}>
                            <FaAngleRight />
                        </button>
                    }
                </Sidebar>
                
                
            </div>
        );
    }
}