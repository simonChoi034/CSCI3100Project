import React, { Component } from 'react';
import axios from 'axios';
import './TutorList.css';
import TutorCard from '../tutor_card/TutorCard';
import {
    Container,
    Row,
} from 'reactstrap';

class TutorList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutors:[]
        };
    }

    componentDidMount() {
        axios.get("/api/user/list_tutor")
            .then(res => {
                this.setState({tutors: res.data.tutorList})
            })
            .catch(err => console.error(err.toString()))
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {this.state.tutors.map((tutor) =>
                        <TutorCard tutor={tutor} />
                    )}
                </Row>
            </Container>
        );
    }
}

export default TutorList;
