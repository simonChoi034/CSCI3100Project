import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Alert } from "reactstrap";
import axios from 'axios';

class JobForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
        };
    };

    componentDidMount() {
        var self = this;
        axios.get('/api/job/create_job')
            .then(function (res) {
                self.setState({
                    districtList: res.data.districtList,
                    eduLevelList: res.data.eduLevelList
                })
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    creatEduLevelList(){
        var options = [];

        this.state.eduLevelList.forEach(function (e) {
            options.push(<option value={e.id}>{e.name}</option>)
        });

        return options;
    };

    creatDistrictList(){
        var options = [];
        var districts = this.state.districtList;

        options.push(<option value="">Please choose a district</option>);

        for (var key in districts) {
            options.push(<option value="" disabled>{key}</option>);

            districts[key].forEach(function (e) {
                options.push(<option value={e.id}>{e.area}</option>);
            })
        }

        return options;
    };

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <Form id="job_create_form" onSubmit={this.handleSubmit()}>
                <FormGroup>
                    <Label for="district">Living district:</Label>
                    <Input
                        type="select"
                        size="lg"
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
                        size="lg"
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="tuition_fee">Tuition fee:</Label>
                    <Input
                        type="text"
                        name="tuition_fee"
                        id="tuition_fee"
                        size="lg"
                        value={this.state.tuition_fee}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="num_of_student">Tuition fee:</Label>
                    <Input
                        type="select"
                        name="num_of_student"
                        id="num_of_student"
                        size="lg"
                        onChange={this.handleChange}
                    >
                        <option value="1">1</optionvalue>
                        <option value="2">2</optionvalue>
                        <option value="3">3</optionvalue>
                        <option value="4">4</optionvalue>
                        <option value="5">5</optionvalue>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="tutor_academic">Tutor academic requirements:</Label>
                    <Input
                        type="select"
                        name="tutor_academic"
                        id="tutor_academic"
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                        size="lg"
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
                    size="lg"
                    color="primary"
                    className="text-center"
                >
                    Submit job request
                </Button>
            </Form>
        )
    }
}