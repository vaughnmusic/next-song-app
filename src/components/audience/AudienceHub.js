import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentGigs } from '../../services/http.service';
import './AudienceHub.css';

// import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';

export default function AudienceHub() {

    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        getGigs()
    }, [])

    function getGigs() {
        getCurrentGigs()
            .then(response => {
                setGigs(response.data)
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
                    <Link to={'gigs/' + gig.id} key={i}>
                        <div className="gig">
                            {gig.location}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}



