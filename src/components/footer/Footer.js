import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const year = new Date().getFullYear();
    return <footer>
        Copyright  <FontAwesomeIcon icon={faCopyright} /> Next Song {year}
    </footer>
};

export default Footer;

