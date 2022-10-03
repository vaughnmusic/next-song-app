import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'


export default function NotFound() {
    return (
        <div className='notfound-container' >
            <FontAwesomeIcon className='sad-face' icon={faFaceFrownOpen} />
            <h3 className='oops' >Oops! This Page Doesn't Exist.</h3>
            <p>
                <Link className='back-home' to="/">Back to Home</Link>
            </p>
        </div>
    )
}
