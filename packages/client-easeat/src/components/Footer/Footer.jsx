import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer page-footer font-small pt-4">
                <div className="footer-copyright text-center py-3">
                    © 2020 Copyright:
                    <a href="http://lab.adamouali.fr/"> eseat.com </a>
                </div>
            </footer>
        )
    }
}

export default Footer;
