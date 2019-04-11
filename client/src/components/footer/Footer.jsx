import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {FaPhone} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';
import './Footer.css';

class Footer extends Component {


    render() {
        return (
            <div id="footer" className="mt-5 mb-0 px-5 py-3 text-light">
                
                <Row>
                    <Col sm="12" md="4" className="text-left mt-4">
                        <h6 id="contact_us m-0">Contact Us:</h6>
                        <a href = 'mailto:teachhub@gmail.com'>
                            <p id="contact_info"><IoMdMail className="mr-2 align-text-top"/> teachhub@gmail.com</p>
                        </a>
                        <p id="contact_hotline"><FaPhone className="mr-2 align-text-top"/> +852 9388 9388</p>
                    </Col>
                    <Col sm="0" md="3" xl="5"></Col>
                    <Col sm="12" md="5" xl="3" className="text-left pr-0 mt-4">
                        <p className="text-left">TeachHub © 2019 All Rights Reserved</p>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Footer;