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
    Input
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
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input placeholder="Search..."/>
                                <button>Search</button>
                            </InputGroup>
                            <NavItem>
                                <NavLink className="text-light" href="/tutors/">Tutors</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="text-light" nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Navbar to='jobs'>Jobs Wall</Navbar>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/tutors'>Tutors List</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        <NavLink to='/register'>Register</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to='/login'>Login</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;
