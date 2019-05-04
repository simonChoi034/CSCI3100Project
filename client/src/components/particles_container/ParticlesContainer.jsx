import React, {Component} from 'react';
import './ParticlesContainer.css';
import Particles from 'react-particles-js';

// the dynamic particles floating component for the background of the website
class ParticlesContainer extends Component {

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
          <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 50
                  },
                  "size": {
                      "value": 3
                  },
                  "color": {
                      "value": "#21adc0"
                  },
                  "opacity": {
                      "value": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1.6
                  },
                  "line_linked": {
                    "color": "#42f471"
                  }
              }
            }} 
            className="background-class"
          />
        );
    }
}

export default ParticlesContainer;
