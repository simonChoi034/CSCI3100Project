import React, {Component} from 'react';
import './App.css';
import NavbarComponent from './components/navbar/NavbarComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { history, Role } from './components/helper/index';
import { authenticationService } from './components/auth/authentication.service';

import ParticlesContainer from './components/particles_container/ParticlesContainer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tutors from './pages/Tutors';
import Jobs from './pages/JobsWall';
import Footer from './components/footer/Footer'
import Messenger from './components/messenger/messenger';

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
                            <div id="body">
                                <Switch>
                                    <Route path='/' component={Home} exact />
                                    <Route path='/login' component={Login} />
                                    <Route path='/register' component={Register} />
                                    <Route path='/tutors' component={Tutors} />
                                    <Route path='/jobs' component={Jobs} />
                                    <Route path='/messenger' component={Messenger} />
                                </Switch>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
