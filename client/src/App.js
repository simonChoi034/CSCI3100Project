import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent'


class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarComponent/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Welcome to TeachHub!
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
