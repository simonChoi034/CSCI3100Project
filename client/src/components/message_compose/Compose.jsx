import React, {Component} from 'react';
import './Compose.css';

export default class Compose extends Component {
    constructor(props){
        super(props);

        // initialize all states for this component
        this.state = {
            input: ''
        };

        // bind this method to pass it to other child components
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handler for submission
    handleSubmit(e) {
        if (e.key === 'Enter'){
            const input = this.state.input;
            this.setState({
                input: ''
            });
            this.props.submit(input);
        }
    }

    // handler for any changes
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