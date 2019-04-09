import React, {Component} from 'react';
import './NavbarComponent.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';
import { authenticationService } from '../auth/authentication.service';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
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

    render() {
        return (
            <Navbar id="nav-bar" expand="md">
                <NavbarBrand className="btn btn-outline-light m-0" href="/">TeachHub</NavbarBrand>
                <NavbarToggler className="navbar-light" onClick={this.toggle}/>
                {
                    this.props.currentUser &&
                    <h4 className={"text-light"}><b>Hi {this.props.currentUser.username}</b></h4>
                }
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
        );
    }
}

export default NavbarComponent;
