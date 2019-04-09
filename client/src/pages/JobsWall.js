import React, { Component } from 'react';
import "./JobsWall.css";
import JobWall from '../components/job_wall/JobsWall';
import JobForm from '../components/job_form/JobForm'
import {authenticationService} from "../components/auth/authentication.service";
import {Role} from "../components/helper";
import {Container} from "reactstrap";

class Jobs extends Component{
    constructor(props){
        super(props);

        this.state = {
            isFormOpen: false
        };

        this.handleOpenForm = this.handleOpenForm.bind(this)
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    handleOpenForm() {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    openJobForm() {
        const form = (
            <JobForm
                currentUser={this.state.currentUser}
                isTutor={this.state.isTutor}
                openForm={this.handleOpenForm}
                history={this.props.history}
            />
        );
        const wall = (
            <JobWall
                currentUser={this.state.currentUser}
                isTutor={this.state.isTutor}
                openForm={this.handleOpenForm}
                history={this.props.history}
            />
        );

        return this.state.isFormOpen ? form : wall;
    }

    render() {
        return (
            <Container fluid>
                { this.openJobForm() }
            </Container>
        )
    }
}

export default Jobs;