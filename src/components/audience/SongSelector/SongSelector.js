import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SongCard.css'
import { getGigById, getPlaylistSongs, submitNewRequest } from '../../../services/http.service';

export default function SongSelector() {

    // const [userType, setuserType] = useState(false);
    const [playlistId, setPlaylistId] = useState();
    const [playlist, setPlaylist] = useState([]);

    // somehow get the data out of the paramaters of the url
    const gigId = "c7e65216-3dad-11ed-bd1e-c93bcd52340c"

    // const navigate = useNavigate();

    useEffect(() => {
        getGigData();
        // getPlaylist()
    }, [])

    useEffect(() => {
        if (playlistId !== undefined) {
            getPlaylist(playlistId);
        }
    }, [playlistId]);

    function getGigData() {

        getGigById(gigId)
            .then(response => {
                console.log(response.data)
                setPlaylistId(response.data.spotify_playlist_id)
            })
            .catch()
    }

    function getPlaylist(playlistId) {

        getPlaylistSongs(playlistId)
            .then(response => {
                setPlaylist(response.data.items)
            })
            .catch()
    }

    return (
        <div>
            <h2>Choose Song to Request</h2>
            <div className='song-container' >
                {playlist.map((song, i) => (
                    <Song key={song.track.id}
                        {...song.track}
                        albumUrl={song.track?.album?.images[0]?.url}
                    />
                ))}
            </div>

        </div>
    )
}


function Song({ id, albumUrl, name, artists }) {
    return (
        <div className={`song-card`} >
            <div className='picture-frame'>
                <img src={albumUrl} alt={name + ' album art'} />
            </div>

            <div className='song-detail'>
                <h3>{name}</h3>
                <p>{artists.map(artist => artist.name).join(", ")}</p>
            </div>

        </div>
    )
}