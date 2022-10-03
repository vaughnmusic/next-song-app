import React, { useEffect, useState } from 'react'
import { getCurrentGigs, getCurrentUsersPlaylists } from '../../../services/http.service';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import { Link, useNavigate } from 'react-router-dom'
import './PerformerHub.css'

export default function PerformerHub() {

    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        getGigs()
    }, [])

    function getGigs() {
        getCurrentGigs()
            .then(response => {
                setGigs(response.data)
                console.log(response.data)
            })
            .catch()
    }

    return (
        <div>
            <div className='audience-main-title' >
                find your show...
            </div>

            <div className='gig-container' >
                {gigs.map((gig, i) => (
                    <Link to={'/requests/' + gig.id} key={i}>
                        <div className="gig">
                            {gig.location}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
