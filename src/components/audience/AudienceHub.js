import React, { useEffect, useState } from 'react';
import { getPlaylistSongs } from '../../services/http.service';
import './AudienceHub.css';

// import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';

export default function AudienceHub() {

    const [playlistSongs, setPlaylistSongs] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        getPlaylistSongs()
            .then(response => {
                setPlaylistSongs(response.data.items)
                console.log(response.data.items)
            })
            .catch()
    }

    return (
        <div>
            <div className='audience-main-title' >Browse Songs and Make Your Request!</div>

            {/* <selectSongRequest /> */}



            {playlistSongs === undefined
                ? (
                    <p>There are no current shows available.</p>
                )
                : (
                    <div>
                        {playlistSongs.map(playlist => (
                            <p>{playlist.items}</p>
                        ))}
                    </div>
                )
            }



        </div>
    )
}



