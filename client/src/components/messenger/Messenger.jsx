import React, { Component } from 'react';
import client from 'socket.io-client';
import ConversationList from '../conversation_list/ConversationList';
import MessageList from '../message_list/MessageList';
import './Messenger.css';
import {authenticationService} from "../auth/authentication.service";
import {Role} from "../helper";
import { Fade, Button } from 'reactstrap';
import Sidebar from 'react-sidebar';


export default class Messenger extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentChatRoomData: null,
            sidebarOpen: true
        };

        // collapsable sidebar
        this.mql = window.matchMedia('(min-width: 480px');
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);

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

    componentWillMount() {
        this.mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.mql.removeListener(this.mediaQueryChanged);
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
                  docked={this.state.sidebarDocked}
                  onSetOpen={this.onSetSidebarOpen}
                  className="collapse-sidebar"
                >
                    <Button onClick={() => this.onSetSidebarOpen(true)}>
                      Open sidebar
                    </Button>
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