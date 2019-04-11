import React, {Component} from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

class Footer extends Component {


    render() {
        return (
            <div id="footer" className="mt-5 mb-0 px-0 text-light">
                <p className="text-center m-0">TeachHub © 2019 All Rights Reserved</p>
                <p id="contact_us">Contact Us</p>
                <a href = 'mailto:teachhub@gmail.com'><p id="contact_info">Email: teachhub@gmail.com</p></a>
                <p id="contact_info">Hotline: 9388 9388</p>
            </div>
        )
    }
}

export default Footer;