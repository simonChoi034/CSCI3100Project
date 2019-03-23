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
                    <NavbarToggler className="navbar-dark" onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
<<<<<<< HEAD:client/src/components/NavbarComponent.jsx
                                <NavLink className="text-light" href='/jobs'>Jobs Wall</NavLink>
=======
                                <NavLink className="text-light" href='/jobs'>Jobs</NavLink>
>>>>>>> 75ed904485f374cee51bb9083ddb5a18d98755c7:client/src/components/navbar/NavbarComponent.jsx
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
