import React, { Component } from "react";
import { Button } from "reactstrap";
import "./JobRequest.css";
import JobForm from "../components/job_form/JobForm"
import {
  Row, 
} from 'reactstrap';

class JobRequest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            tutor: false
        };
        
    }

    render(){
        return (
            <div id="Register">
                <p>Job require Page</p>
                <JobForm/>
            </div>
        );
    }

    

}

export default JobRequest;