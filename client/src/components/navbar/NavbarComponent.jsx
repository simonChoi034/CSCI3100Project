import React, {Component} from 'react';
import {Role} from "../helper";
import './NavbarComponent.css';
import { FaUserAlt } from "react-icons/fa";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge,
    Button,
    Fade
} from 'reactstrap';
import { authenticationService } from '../auth/authentication.service';
import InfoEditParent from '../info_edit/InfoEditParent';
import InfoEditTutor from '../info_edit/InfoEditTutor';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isOpen: false,
            modal: false,
            modalData: null
        };
        this.createModal = this.createModal.bind(this);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    toggleNav() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    createNavItem() {
        var item = [];

        if (this.props.currentUser) {
            item.push(
                <NavLink key={0} className="text-light" href='/' onClick={this.logout}>Logout</NavLink>
            )
        } else {
            item.push(
                <NavItem key={0}>
                    <NavLink className="text-light" href='/register'>Register</NavLink>
                </NavItem>
            );
            item.push(
                <NavItem key={1}>
                    <NavLink className="text-light" href='/login'>Login</NavLink>
                </NavItem>
            );
        }

        return item;
    }

    logout() {
        authenticationService.logout();
        this.props.history.push('/');
    }


    toggle(event, data) {
        this.setState(prevState => ({
            modal: !prevState.modal,
            modalData: data
        }));
    }

    createModal(data) {
        const props = {
            modal: this.state.modal,
            toggle: this.toggle,
            className: this.props.className,
            modalData: this.state.modalData
        };
        if(this.state.isTutor){
            return (
                <InfoEditTutor {...props}/>
            )
        }else{
            return (
                <InfoEditParent {...props}/>
            )
        }
    }

    render() {
        return (
            <div>
                {this.createModal(this.props.currentUser)} 
                <Navbar id="nav-bar" expand="sm">
                    
                    <NavbarBrand className="btn btn-outline-light m-0" href="/">TeachHub</NavbarBrand>
                    {
                        this.props.currentUser &&
                        <Nav id = 'hi' className="text-light mx-1">
                            <b>
                                <Button outline color='link' className="text-light" onClick={(event) => this.toggle(event, this.props.currentUser)}>
                                    <FaUserAlt className="mr-1 icon"/>
                                    <span className="align-bottom">Hi {this.props.currentUser.username}</span>
                                </Button>
                            </b>
                        </Nav>
                    }
                    <NavbarToggler className="navbar-light float-right" onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-light" href='/jobs'>Jobs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href="/tutors">Tutors</NavLink>
                            </NavItem>
                            {
                                this.createNavItem()
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;
