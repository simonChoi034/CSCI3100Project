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

        // initialize the states for this component
        this.state = {
            currentChatRoomData: null,
            sidebarOpen: true
        };

        // bind collapsable sidebar
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

        // connect socket
        this.socket = client.connect('http://localhost:8080/');

        // bind this method to pass to other child components
        this.handleChatRoom = this.handleChatRoom.bind(this);
    }

    // check login status when the component is mounted
    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    // update the socket when the component is updated
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.currentUser !== prevState.currentUser) {
            this.socket.emit('setSocketID', this.state.currentUser.id);
        }
    }

    // open the side bar
    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    // change media query
    mediaQueryChanged() {
        this.setState({
            sidebarDocked: this.mql.matches,
            sidebarOpen: false
        })
    }

    // handler for the data in the chatroom
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

                    { this.state.sidebarOpen?
                        <button className="toggle-btn opened-sidebar-btn" onClick={() => this.onSetSidebarOpen(false)}>
                            <FaAngleLeft />
                        </button> :
                        <button className="toggle-btn closed-sidebar-btn" onClick={() => this.onSetSidebarOpen(true)}>
                            <FaAngleRight />
                        </button>
                    }
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
                </Sidebar>
                
                
            </div>
        );
    }
}