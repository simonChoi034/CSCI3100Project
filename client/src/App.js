import React, {Component} from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home/home.js';
import Login from './pages/login/login.js';
import Register from './pages/register/register.js';
import Tutors from './pages/tutors/tutors.js';
import Jobs from './pages/jobs_wall/jobs_wall.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavbarComponent />
                <Router>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/tutors' component={Tutors} />
                        <Route path='/jobs' component={Jobs} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
