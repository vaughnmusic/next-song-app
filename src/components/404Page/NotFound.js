import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'


export default function NotFound() {
    return (
        <div>
            <FontAwesomeIcon className='sad-face' icon={faFaceFrownOpen} />
            <h3>Oops! This Page Doesn't Exist.</h3>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    )
}
