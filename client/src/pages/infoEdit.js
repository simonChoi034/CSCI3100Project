import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert, Container, FormText} from "reactstrap";
import "./infoEdit.css";
import axios from 'axios';
import { authenticationService } from "../components/auth/authentication.service";
import InfoEdit from "../components/info_edit/InfoEdit"

class infoEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            showinfo:false
        };

        this.handleClickinfoEdit=this.handleClickinfoEdit.bind(this);
    }


    handleClickinfoEdit(event) {
        this.setState({
            showinfo: true,
            out: <InfoEdit history={this.props.history}/>
        });
    }



    render() {
        return (
            <div id="infoEdit">
                <h1>User Information</h1>
                <Container fluid>
                    <Form>
                        <FormGroup>
                            <Label for="username">User name</Label>
                            <Input plaintext value={this.state.username}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email address</Label>
                            <Input plaintext value={this.state.email}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input plaintext value={this.state.password}
                            />
                        </FormGroup>
                    </Form>

                    <Row>
                        <Button color="success"
                                className="text-center pull-left mx-3"
                                id="infoEdit_btn"
                                onClick={this.handleClickinfoEdit}>info Edit
                        </Button>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default infoEdit;
