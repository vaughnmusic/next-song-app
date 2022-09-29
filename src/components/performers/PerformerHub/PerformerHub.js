import React, { useEffect, useState } from 'react'
import { getCurrentUsersPlaylists } from '../../../services/http.service';
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
import { Link } from 'react-router-dom'
import './PerformerHub.css'

export default function PerformerHub() {

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
                        create a show
                    </button>
                </Link>
                {playlists.map(playlist => (
                    <p>{playlist.name}</p>
                ))}
            </div>
        )
    }
}
