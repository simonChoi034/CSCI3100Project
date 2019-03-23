import React, {Component} from 'react';
import './login.css';

class login extends Component {

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
            <div className="login">
                <div className="bg-white">
                    <div className="small-bg">
                        <div className="login_frame">
                            <form>
                                <label>
                                    Name:
                                    <input type="text" name="name" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default login;
