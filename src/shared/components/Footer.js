import React from 'react';
import {Link} from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Author: I did it</p>
            <p><Link to='/credits'>Crédits</Link></p>
        </footer>
    )
}

export default Footer;
