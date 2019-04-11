import React, { Component } from 'react';
import './TutorCard.css';
import male from "../../images/boy.png"
import female from "../../images/girl.png"
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
        this.state = {
            tutor: props.tutor
        };
    }

    createCardTitle() {
        const color = this.state.tutor.sex === 'M' ? 'primary' : 'danger';
        const img = this.state.tutor.sex === 'M'? male : female;
        return (
            <Button outline disabled color={color}>
                <img src={img} width={32} height={32} alt="img" />
                <span className="m-2">Name: {this.state.tutor.nick_name}</span>
            </Button>
        )
    }

    componentWillReceiveProps(props) {
        this.setState({
            tutor: props.tutor
        })
    }

    render() {
        return (
            <Col className="d-flex justify-content-center" xs="12" sm="6" lg="4">
                <Card body className="my-3">
                    <CardTitle>{ this.createCardTitle() }</CardTitle>
                    <CardText className="text-left">Gender: {this.state.tutor.sex}</CardText>
                    <CardText className="text-left">Education Level: {this.state.tutor.education_level}</CardText>
                    <Button
                        className = "contact_btn mx-1"
                        color="info"
                        onClick={ (event) => this.props.toggle(event, this.state.tutor) }
                    >
                        More information
                    </Button>
                </Card>
            </Col>
        );
    }
}

export default TutorCard;
