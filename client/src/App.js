import React, {Component} from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarComponent />
                <Router>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/login' component={Login} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
