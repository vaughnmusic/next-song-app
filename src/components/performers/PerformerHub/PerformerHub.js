import React, { useEffect, useState } from 'react'
import { getCurrentUsersPlaylists } from '../../../services/http.service';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import { Link } from 'react-router-dom'
import './PerformerHub.css'

export default function PerformerHub() {

    // this is the fetch data 'structure'
    // we need to get gigs (by performer/user id)
    // TODO: playlists -> gigs

    // const [playlists, setPlaylists] = useState();

    // useEffect(() => {
    //     getData()
    // }, [])


    // function getData() {
    //     getCurrentUsersPlaylists()
    //         .then(response => {
    //             setPlaylists(response.data.items)
    //             console.log(response.data)
    //         })
    //         .catch()
    // }

    if (playlists === undefined) {
        return <LoadingAnimation />
    } else {
        return (
            <div>
                <Link to="/create">
                    <button className='primary'>
                        + Start A New Show
                    </button>
                </Link>

                {/* show this users gigs here */}
                {/* gigs.map -> something with a Link */}

            </div>
        )
    }
}
