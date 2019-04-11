import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Register.css";
import TutorRegister from "../components/tutor_register/TutorRegister"
import ParentRegister from "../components/parent_register/ParentRegister"
import {
  Row, 
  Container
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
            <div id="Register" className="py-5">
                <Container fluid>
                    <Row>
                        {
                            this.state.showTutor?
                            <Button
                                color="primary"
                                className="text-center pull-left mx-3" 
                                id="tutor_btn"
                                onClick={this.handleClickTutor}>Tutor
                            </Button> :
                            <Button
                                color="primary"
                                outline
                                className="text-center pull-left mx-3" 
                                id="tutor_btn"
                                onClick={this.handleClickTutor}>Tutor
                            </Button>
                        }
                        {
                            this.state.showParent?
                            <Button 
                                color="primary"
                                className="text-center mx-3"
                                id="parent_btn"
                                onClick={this.handleClickParent}>Parent/Student
                            </Button> :
                            <Button 
                                color="primary"
                                outline
                                className="text-center mx-3"
                                id="parent_btn"
                                onClick={this.handleClickParent}>Parent/Student
                            </Button>
                        }
                    </Row>
                    {this.state.out}
                </Container>
            </div>
        );
    }

    

}

export default Register;