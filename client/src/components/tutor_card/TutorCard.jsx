import React, { Component } from 'react';
import './TutorCard.css';
import Male from "../../images/users/boy.png"
import Female from "../../images/users/girl.png"
import {
    Card,
    CardTitle,
    CardText,
    Col,
    Button,
} from 'reactstrap';

class TutorCard extends Component {

    constructor(props) {
        super(props);
        // initialize the states for the component
        this.state = {
            tutor: props.tutor
        };
    }

    // create the title for the tutor card
    createCardTitle() {
        const color = this.state.tutor.sex === 'M' ? 'primary' : 'danger';
        const img = this.state.tutor.sex === 'M'? Male : Female;
        return (
            <Button outline disabled color={color}>
                <div><img className="user-icon" src={img} alt="img" /></div>
                <span className="m-auto">Name: {this.state.tutor.nick_name}</span>
            </Button>
        )
    }

    // get parameters from caller
    componentWillReceiveProps(props) {
        this.setState({
            tutor: props.tutor
        })
    }

    render() {
        return (
            <Col className="d-flex justify-content-center" xs="12" sm="6" lg="4">
                <Card body className="p-3 my-3">
                    <CardTitle>{ this.createCardTitle() }</CardTitle>
                    <CardText className="text-left">Gender: {this.state.tutor.sex}</CardText>
                    <CardText className="text-left">Education Level: {this.state.tutor.education_level}</CardText>
                    <Button
                        className = "contact_btn mx-1"
                        color="info"
                        onClick={ (event) => this.props.toggle(event, this.state.tutor) }
                    >
                        Show Details
                    </Button>
                </Card>
            </Col>
        );
    }
}

export default TutorCard;
