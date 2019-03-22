import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import login from './components/login'


class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarComponent/>
                <header className="App-header">
                    <login/>
                    <p>
                        Welcome to TeachHub!
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
