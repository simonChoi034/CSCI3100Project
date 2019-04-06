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
                <NavLink className="text-light" href='/' onClick={this.logout}>Logout</NavLink>
            )
        } else {
            item.push(
                <NavItem>
                    <NavLink className="text-light" href='/register'>Register</NavLink>
                </NavItem>
            );
            item.push(
                <NavItem>
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
            <div className="NavbarComponent">
                <Navbar className="bg-dark" expand="md">
                    <NavbarBrand className="btn btn-warning text-light" href="/">TeachHub</NavbarBrand>
                    <NavbarToggler className="navbar-dark" onClick={this.toggle}/>
                    {
                        this.props.currentUser &&
                        <h4><Badge color="secondary">Hi {this.props.currentUser.username}</Badge></h4>
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
            </div>
        );
    }
}

export default NavbarComponent;
