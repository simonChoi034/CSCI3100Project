import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {


    render() {
        return (
            <div id="footer" className="mt-5 mb-0 px-5 py-3 text-light">
                
                <div className="float-left text-left">
                    <h6 id="contact_us">Contact Us:</h6>
                    <a href = 'mailto:teachhub@gmail.com'>
                        <p id="contact_info">Email: teachhub@gmail.com</p>
                    </a>
                    <p id="contact_hotline">Hotline: 9388 9388</p>
                </div>

                <div className="float-right">
                    <p className="text-center">TeachHub © 2019 All Rights Reserved</p>
                </div>

            </div>
        )
    }
}

export default Footer;