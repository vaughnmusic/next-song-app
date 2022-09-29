import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
                setGigs(response.data.items)
                console.log(response.data.items)
            })
            .catch()
    }

    return (
        <div>
            <div className='audience-main-title' >
                find your show...
            </div>

            <div className='gig-container' >
                {gigs.map((gigs, i) => (
                    <div key={i}
                        className={`gig ${selectedGigIndex === i ? 'selected' : ''}`}
                        onClick={() => setSelectedGigIndex(i)}
                    >
                        {/* not sure if this part is correct */}
                        {gigs.items}
                        {/* {gigs.spotify_playlist_id} */}
                    </div>
                ))}
            </div>
        </div>
    )
}



