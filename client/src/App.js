import React, {Component} from 'react';
import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { history, Role } from './components/helper/index';
import { authenticationService } from './components/auth/authentication.service';

import ParticlesContainer from './components/particles_container/ParticlesContainer';
import Home from './pages/home.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Tutors from './pages/tutors.js';
import Jobs from './pages/jobs_wall.js';
import Forget_PW from "./pages/forget_password.js";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentUser: null,
            isTutor: false
        }
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    render() {
        return (
            <div className="App">
                <Router history={history} >
                    <div className="particles-bg">
                        <ParticlesContainer />
                        <div className="web-content">
                            <NavbarComponent currentUser={this.state.currentUser} history={history}/>
                            <Switch>
                                <Route path='/' component={Home} exact />
                                <Route path='/login' component={Login} />
                                <Route path='/register' component={Register} />
                                <Route path='/tutors' component={Tutors} />
                                <Route path='/jobs' component={Jobs} />
                                <Route path='/forget_pw' component={Forget_PW} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
