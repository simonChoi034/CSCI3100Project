import React, { Component } from "react";
import { Button } from "reactstrap";
import "./register.css";
import TutorRegister from "../components/tutor_register/TutorRegister"
import ParentRegister from "../components/parent_register/ParentRegister"
import {
  Row, 
} from 'reactstrap';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            email: '',
            tutor: false,
            showTutor: false,
            showParent: true,
            out: <ParentRegister history={this.props.history}/>
        };
        
        this.handleClickTutor = this.handleClickTutor.bind(this);
        this.handleClickParent = this.handleClickParent.bind(this);
    }

    handleClickTutor(event) {  
        this.setState({
            showTutor: true,
            showParent: false,
            out: <TutorRegister history={this.props.history}/>
        });
    }

    handleClickParent(event) {  
        this.setState({
            showTutor: false,
            showParent: true,
            out: <ParentRegister history={this.props.history}/>
        });
    }

    render(){
        return (
            <div id="Register">
                <p>Register Page</p>
                <Row>
                    <Button
                        color="success"
                        className="text-center pull-left" 
                        id="tutor_btn"
                        onClick={this.handleClickTutor}>Tutor Registration
                    </Button>
                    <Button 
                        color="secondary"
                        className="text-center"
                        id="parent_btn"
                        onClick={this.handleClickParent}>Parent Registration
                    </Button>
                </Row>
                {this.state.out}
            </div>
        );
    }

    

}

export default Register;