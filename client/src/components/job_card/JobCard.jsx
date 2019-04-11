import React, {Component} from 'react';
import './JobCard.css';
import Biology from "../../images/subject/biology.png";
import Mathematics from "../../images/subject/math.png";
import Science from "../../images/subject/science.png";
import English from "../../images/subject/english.png";
import BAFS from "../../images/subject/bafs.png";
import Business from "../../images/subject/business.png";
import Chemistry from "../../images/subject/chemistry.png";
import Econ from "../../images/subject/econ.png";
import M2 from "../../images/subject/m2.png";
import Physics from "../../images/subject/physics.png";
import Statistics from "../../images/subject/statistics.png";
import M1 from "../../images/subject/m1.png";
import Geography from "../../images/subject/geography.png";
import History from "../../images/subject/history.png";
import ChineseHistory from "../../images/subject/chinese_history.png";
import GeneralEducation from "../../images/subject/general_education.png";
import Chinese from "../../images/subject/chinese.png";
import General from "../../images/subject/general.png";

import {
    Card, 
    CardTitle, 
    CardText,
    Col,
    Button,
    Badge
} from 'reactstrap';

class JobCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: props.job
        };
    }

    createCardTitle() {
        var img = General;
        if (this.state.job.subject === 'Chinese') {
            img = Chinese;
        }
        if (this.state.job.subject === 'English') {
            img = English;
        }
        if (this.state.job.subject === 'Mathematics') {
            img = Mathematics;
        }
        if (this.state.job.subject === 'General education') {
            img = GeneralEducation;
        }
        if (this.state.job.subject === 'M1') {
            img = M1;
        }
        if (this.state.job.subject === 'M2') {
            img = M2;
        }
        if (this.state.job.subject === 'Chinese history') {
            img = ChineseHistory;
        }
        if (this.state.job.subject === 'History') {
            img = History;
        }
        if (this.state.job.subject === 'Geography') {
            img = Geography;
        }
        if (this.state.job.subject === 'Science') {
            img = Science;
        }
        if (this.state.job.subject === 'Physics') {
            img = Physics;
        }
        if (this.state.job.subject === 'Chemistry') {
            img = Chemistry;
        }
        if (this.state.job.subject === 'Biology') {
            img = Biology;
        }
        if (this.state.job.subject === 'Business') {
            img = Business;
        }
        if (this.state.job.subject === 'Econ') {
            img = Econ;
        }
        if (this.state.job.subject === 'BAFS') {
            img = BAFS;
        }
        if (this.state.job.subject === 'Statistics') {
            img = Statistics;
        }

        return (
            <Button disabled outline color="primary">
                <img src={img} alt="img" />
                {this.state.job.subject}
            </Button>
        )
    }

    componentWillReceiveProps(props) {
        this.setState({
            job: props.job
        })
    }

    render() {
        return (
            <Col xs="12" sm="6" lg="4">
                <Card body className="my-3">
                    <CardTitle>{ this.createCardTitle() }</CardTitle>
                    <CardText className="text-left">Region: {this.state.job.region}</CardText>
                    <CardText className="text-left">District: {this.state.job.district}</CardText>
                    <CardText className="text-left">Student Level: {this.state.job.student_level}</CardText>
                    <CardText className="text-left">Tuition Fee: {this.state.job.tuition_fee}</CardText>
                    <Button color="info" className="detail_btn mx-1" onClick={ (event) => this.props.toggle(event, this.state.job)}>Show Details</Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
