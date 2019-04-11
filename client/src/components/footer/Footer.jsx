import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './Footer.css';

class Footer extends Component {


    render() {
        return (
            <div id="footer" className="mt-5 mb-0 px-5 py-3 text-light">
                
                <Row>
                    <Col sm="12" md="6" className="text-left mt-4">
                        <h6 id="contact_us m-0">Contact Us:</h6>
                        <a href = 'mailto:teachhub@gmail.com'>
                            <p id="contact_info">Email: teachhub@gmail.com</p>
                        </a>
                        <p id="contact_hotline">Hotline: 9388 9388</p>
                    </Col>

                    <Col sm="12" md="6" className="text-left mt-4">
                        <p className="text-left">TeachHub © 2019 All Rights Reserved</p>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Footer;