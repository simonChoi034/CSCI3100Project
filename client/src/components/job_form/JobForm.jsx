import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Alert, Row, Col, Fade } from "reactstrap";
import './JobForm.css'
import axios from 'axios';

class JobForm extends Component{
    constructor(props){
        super(props);

        // initialize the states for this components
        this.state = {
            currentUser: this.props.currentUser,
            client_id: this.props.currentUser.id,
            districtList: [],
            eduLevelList: [],
            subjectList: [],
            studentLevelList: [],
            num_of_student: 1
        }
    };

    componentDidMount() {
        var self = this;
        // call Rest Api to create job in database
        axios.get('/api/job/create_job')
            .then(function (res) {
                self.setState({
                    districtList: res.data.districtList,
                    eduLevelList: res.data.eduLevelList,
                    subjectList: res.data.subjectList,
                    studentLevelList: res.data.studentLevelList,
                    student_level: res.data.studentLevelList[0].id,
                    subject: res.data.subjectList[0].id,
                    tutor_academic: res.data.eduLevelList[0].id
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    creatEduLevelList() {
        var options = [];
        // push all edu levels got from database to the selection list
        this.state.eduLevelList.forEach(function (e) {
            options.push(<option value={e.id}>{e.education_level}</option>)
        });

        return options;
    };

    creatDistrictList() {
        var options = [];
        var districts = this.state.districtList;

        // push all district got from database to the selection list
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

        // push all subjects got from database to the selection list
        this.state.subjectList.forEach(function (e) {
            options.push(<option value={e.id}>{e.subject}</option>)
        });

        return options;
    }

    createStuLevelList() {
        var options = [];

        // push all student levels got from database to the selection list
        this.state.studentLevelList.forEach(function (e) {
            options.push(<option value={e.id}>{e.student_level}</option>)
        });

        return options;
    }

    // handler for any changing on fields of the form
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    // handler for submission
    handleSubmit = event => {
        event.preventDefault();
        const data = {
            client_id: this.state.client_id,
            district: this.state.district,
            location: this.state.location,
            student_level: this.state.student_level,
            subject: this.state.subject,
            tuition_fee: this.state.tuition_fee,
            num_of_student: this.state.num_of_student,
            tutor_academic: this.state.tutor_academic,
            tutor_sex: this.state.tutor_sex,
            times_per_week: this.state.times_per_week,
            duration: this.state.duration,
            lesson_time: this.state.lesson_time,
            hotline: this.state.hotline,
            remark: this.state.remark
        };

        // call Rest Api to create a job
        var self = this;
        axios.post('/api/job/create_job', data)
            .then(function (res) {
                self.props.openForm();
            })
            .catch(function (err) {
                const errors = err.response.data.errors;

                self.setState({
                    error: true,
                    error_message: errors[0].msg
                });
                console.log(errors)
            })
    };

    render() {
        return (
            <Fade>
                <Row>
                    <Form id="job_create_form" className="py-2" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Button color='danger' className="my-0" onClick={this.props.openForm}>
                                Close
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="district">Living district:</Label>
                            <Input
                                type="select"
                                name="district"
                                id="district"
                                onChange={this.handleChange}>
                                { this.creatDistrictList() }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input
                                type="text"
                                name="location"
                                id="location"
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
                                        { this.createStuLevelList() }
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
                                        { this.createSubjectList() }
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
                                { this.creatEduLevelList() }
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
                                <option value="O">Male or Female</option>
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
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="hotline">Hotline:</Label>
                            <Input
                                type="text"
                                name="hotline"
                                id="hotline"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="remark">Remark:</Label>
                            <Input
                                type="text"
                                name="remark"
                                id="remark"
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
            </Fade>
        )
    }
}

export default JobForm;