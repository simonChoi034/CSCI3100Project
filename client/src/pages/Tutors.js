import React, { Component } from 'react';
import "./Tutors.css";
import TutorsWall from '../components/tutor_wall/TutorsWall'
import { Container } from 'reactstrap'

class Tutors extends Component{
    constructor(props){
        super(props);

        // initialize the states for this component
        // limit is the max number of tutors to be retrieve from the database
        this.state = {
            limit: 8
        }
    }

    render() {
        return (
            <div className="py-4">
                <Container>
                    <TutorsWall limit={this.state.limit} homeCall={false} handleChatModal={this.props.handleChatModal}/>
                </Container>
            </div>
        );
    }
}

export default Tutors;