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
import Footer from './components/footer/Footer';
import AboutUs from "./pages/AboutUs";
import MessengerLauncher from './components/messager_launcher/Launcher';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentUser: null,
            isTutor: false,
            messengerModal: false
        };

        this.handleChatModal = this.handleChatModal.bind(this);
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isTutor: x && x.role === Role.Tutor
        }));
    }

    handleChatModal(){
        this.setState({
            messengerModal: !this.state.messengerModal
        })
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
                                    <Route path='/' render={() => <Home handleChatModal={this.handleChatModal}/>} exact />
                                    <Route path='/login' component={Login} />
                                    <Route path='/register' component={Register} />
                                    <Route path='/tutors' render={() => <Tutors handleChatModal={this.handleChatModal}/>} />
                                    <Route path='/jobs' render={() => <Jobs handleChatModal={this.handleChatModal}/>} />
                                    <Route path='/about_us' component={AboutUs} />
                                </Switch>
                            </div>
                            {
                                this.state.currentUser &&
                                <MessengerLauncher isOpen={this.state.messengerModal} handleChatModal={this.handleChatModal}/>
                            }
                            <Footer />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
