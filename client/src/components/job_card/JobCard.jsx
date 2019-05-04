import React, {Component} from 'react';
import './JobCard.css';
import Biology from "../../images/subjects/biology.png";
import Mathematics from "../../images/subjects/math.png";
import Science from "../../images/subjects/science.png";
import English from "../../images/subjects/english.png";
import BAFS from "../../images/subjects/bafs.png";
import Business from "../../images/subjects/business.png";
import Chemistry from "../../images/subjects/chemistry.png";
import Econ from "../../images/subjects/econ.png";
import M2 from "../../images/subjects/m2.png";
import Physics from "../../images/subjects/physics.png";
import Statistics from "../../images/subjects/statistics.png";
import M1 from "../../images/subjects/m1.png";
import Geography from "../../images/subjects/geography.png";
import History from "../../images/subjects/history.png";
import ChineseHistory from "../../images/subjects/chinese_history.png";
import GeneralEducation from "../../images/subjects/general_education.png";
import Chinese from "../../images/subjects/chinese.png";
import General from "../../images/subjects/general.png";

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
        // initialize the job for this component
        this.state = {
            job: props.job
        };
    }

    createCardTitle() {
        var img = General;
        // branching for choosing the image of this job card
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
                <div><img className="subject-icon" src={img} alt="img" /></div>
                {this.state.job.subject}
            </Button>
        )
    }

    componentWillReceiveProps(props) {
        // get the jobs from parameters props
        this.setState({
            job: props.job
        })
    }

    render() {
        return (
            <Col xs="12" sm="6" lg="4">
                <Card body className="p-3 my-3">
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
