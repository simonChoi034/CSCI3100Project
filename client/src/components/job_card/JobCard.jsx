import React, {Component} from 'react';
import axios from 'axios';
import './JobCard.css';
import {
    Card, 
    CardTitle, 
    CardText, 
    Row, 
    Col,
    Button,
    Container
} from 'reactstrap';

class JobCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            job: props.job,
            showmore: true
        };

        this.handleClick = this.handleClick.bind(this);
        this.out = this.getComponent();
    }

    handleClick(event) {  
        this.setState({
            showmore: !this.state.showmore
        });
        this.out = this.getComponent();
    }

    getComponent(){
        if(this.state.showmore){
            return 'Show More'
        } else {
            return 'Show Less'
        }
    }

    render() {
        return (
            <Col xs="12" sm="6" lg="4">
                <Card body className="my-3">
                    <CardTitle>Tuition</CardTitle>
                    <CardText className="text-left">Region: {this.state.job.region}</CardText>
                    <CardText className="text-left">District: {this.state.job.district}</CardText>
                    <CardTitle>Tuition</CardTitle>
                    <CardText className="text-left">Region: {this.state.job.region}</CardText>
                    <CardText className="text-left">District: {this.state.job.district}</CardText>
                    <CardText className="text-left">Student Level: {this.state.job.student_level}</CardText>
                    <CardText className="text-left">Tuition Fee: {this.state.job.tuition_fee}</CardText>
                    <CardText className="text-left">Total Number of Student: {this.state.job.num_of_student}</CardText>
                    <CardText className="text-left">Times per week: {this.state.job.times_per_week}</CardText>
                    <CardText className="text-left">Duration: {this.state.job.duration}</CardText>
                    <CardText className="text-left">Lesson Time: {this.state.job.lesson_time}</CardText>
                    <CardText className="text-left">Remark: {this.state.job.remark}</CardText> 
                    <Button 
                        className = "more_btn"
                        onClick={this.handleClick}>
                        {this.out}
                    </Button>
                </Card>
            </Col>
        );
    }
}

export default JobCard;
