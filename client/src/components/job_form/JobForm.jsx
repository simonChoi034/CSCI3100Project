import React, { Component } from 'react';
import { Button, FormGroup, Input, Label, Form, Alert } from "reactstrap";
import axios from 'axios';

class JobForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentUser: this.props.currentUser,

        }
    }
}