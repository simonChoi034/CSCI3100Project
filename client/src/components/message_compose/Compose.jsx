import React, {Component} from 'react';
import './Compose.css';

export default class Compose extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        if (e.key === 'Enter'){
            const input = this.state.input;
            this.setState({
                input: ''
            });
            this.props.submit(input);
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    render() {
        return (
            <div className="compose">
                <input
                    type="text"
                    id="input"
                    name="input"
                    className="compose-input"
                    placeholder="Type a message"
                    value={this.state.input}
                    onChange={this.handleChange}
                    onKeyPress={this.handleSubmit}
                />
            </div>
        );
    }
}