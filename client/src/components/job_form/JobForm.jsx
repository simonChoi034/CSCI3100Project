import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Alert, Row, Col } from "reactstrap";
import './job_form.css'
import axios from 'axios';

class JobForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            client_id: this.props.currentUser.id
        }
    };

    componentDidMount() {
        var self = this;
        axios.get('/api/job/create_job')
            .then(function (res) {
                self.setState({
                    districtList: res.data.districtList,
                    eduLevelList: res.data.eduLevelList,
                    subjectList: res.data.subjectList,
                    studentLevelList: res.data.studentLevelList
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    creatEduLevelList() {
        var options = [];

        this.state.eduLevelList.forEach(function (e) {
            options.push(<option value={e.id}>{e.education_level}</option>)
        });

        return options;
    };

    creatDistrictList() {
        var options = [];
        var districts = this.state.districtList;

        options.push(<option value="">Please choose a district</option>);

        for (var key in districts) {
            options.push(<option value="" disabled>{key}</option>);

            districts[key].forEach(function (e) {
                options.push(<option value={e.id}>{e.district}</option>);
            })
        }

        return options;
    };

    createSubjectList() {
        var options = [];

        this.state.subjectList.forEach(function (e) {
            options.push(<option value={e.id}>{e.subject}</option>)
        });

        return options;
    }

    createStuLevelList() {
        var options = [];

        this.state.studentLevelList.forEach(function (e) {
            options.push(<option value={e.id}>{e.student_level}</option>)
        });

        return options;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <Row>
                    <Form id="job_create_form" onSubmit={this.handleSubmit}>
                        <Button color='danger' onClick={this.props.openForm}>
                            Close
                        </Button>
                        <FormGroup>
                            <Label for="district">Living district:</Label>
                            <Input
                                type="select"
                                name="district"
                                id="district"
                                onChange={this.handleChange}>
                                { this.state.districtList && this.creatDistrictList() }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input
                                type="text"
                                name="location"
                                id="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="student_level">Student level:</Label>
                                    <Input
                                        type="select"
                                        name="student_level"
                                        id="student_level"
                                        onChange={this.handleChange}
                                    >
                                        { this.state.studentLevelList && this.createStuLevelList() }
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="subject">Subject:</Label>
                                    <Input
                                        type="select"
                                        name="subject"
                                        id="subject"
                                        onChange={this.handleChange}
                                    >
                                        { this.state.subjectList && this.createSubjectList() }
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="tuition_fee">Tuition fee:</Label>
                            <Input
                                type="text"
                                name="tuition_fee"
                                id="tuition_fee"
                                value={this.state.tuition_fee}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="num_of_student">Number of student:</Label>
                            <Input
                                type="select"
                                name="num_of_student"
                                id="num_of_student"
                                onChange={this.handleChange}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="tutor_academic">Tutor academic requirements:</Label>
                            <Input
                                type="select"
                                name="tutor_academic"
                                id="tutor_academic"
                                onChange={this.handleChange}
                            >
                                { this.state.eduLevelList && this.creatEduLevelList() }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="tutor_sex">Tutor Gender Request:</Label>
                            <Input
                                type="select"
                                name="tutor_sex"
                                id="tutor_sex"
                                onChange={this.handleChange}
                            >
                                <option>Male or Female</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="times_per_week">Number of times per week</Label>
                            <Input
                                type="text"
                                name="times_per_week"
                                id="times_per_week"
                                value={this.state.times_per_week}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="duration">Lesson duration:</Label>
                            <Input
                                type="text"
                                name="duration"
                                id="duration"
                                value={this.state.duration}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lesson_time">Lesson time:</Label>
                            <Input
                                type="text"
                                name="lesson_time"
                                id="lesson_time"
                                value={this.state.lesson_time}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="hotline">Hotline:</Label>
                            <Input
                                type="text"
                                name="hotline"
                                id="hotline"
                                value={this.state.hotline}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="remark">Remark:</Label>
                            <Input
                                type="text"
                                name="remark"
                                id="remark"
                                value={this.state.remark}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        {
                            this.state.error &&
                            <Alert color='danger'>
                                {this.state.error_message}
                            </Alert>
                        }
                        <Button
                            type="submit"
                            id="job_submit_btn"
                            color="primary"
                            className="text-center"
                        >
                            Submit job request
                        </Button>
                    </Form>
                </Row>
            </div>
        )
    }
}

export default JobForm;