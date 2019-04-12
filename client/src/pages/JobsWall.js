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
            isFormOpen: false,
            limit: 8
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

    showContent() {
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
                limit={this.state.limit}
                homeCall={false}
                handleChatModal={this.props.handleChatModal}
            />
        );

        return this.state.isFormOpen ? form : wall;
    }

    render() {
        return (
            <div className="py-5">
                <Container>
                    { this.showContent() }
                </Container>
            </div>
        )
    }
}

export default Jobs;