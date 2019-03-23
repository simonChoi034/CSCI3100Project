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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button
} from 'reactstrap';

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

    render() {
        return (
            <div className="NavbarComponent">

                <Navbar className="bg-dark" expand="md">
                    <NavbarBrand className="btn btn-warning text-light" href="/">TeachHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-light" href='/jobs'>Jobs Wall</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href="/tutors">Tutors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href='/register'>Register</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-light" href='/login'>Login</NavLink>
                            </NavItem>
                            <InputGroup>
                                <Input placeholder="Search..."/>
                                <Button>Search</Button>
                            </InputGroup>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;
