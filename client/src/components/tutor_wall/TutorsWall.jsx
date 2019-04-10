import React, {Component} from 'react';
import axios from 'axios';
import './TutorsWall.css';
import TutorCard from '../tutor_card/TutorCard';
import {
    Container,
    Row,
    Fade
} from 'reactstrap';
import TutorModal from './TutorModal';

class TutorsWall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutors: [],
            modal: false,
            modalData: null
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        axios.get("/api/user/list_tutor")
            .then(res => {
                this.setState({tutors: res.data.tutorList})
            })
            .catch(err => console.error(err.toString()))
    }

    toggle(event, data) {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalData: data
        }));
    }

    createModal() {
        const props = {
            modal: this.state.modal,
            toggle: this.toggle,
            className: this.props.className,
            modalData: this.state.modalData
        };

        return (
            <TutorModal {...props}/>
        )
    }

    render() {
        return (
            <Fade>
                { this.createModal() }
                <Row>
                    {this.state.tutors.map((tutor, key) =>
                        <TutorCard key={key} tutor={tutor} toggle={this.toggle}/>
                    )}
                </Row>
            </Fade>
        );
    }
}

export default TutorsWall;
