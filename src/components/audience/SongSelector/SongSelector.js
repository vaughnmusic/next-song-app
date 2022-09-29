import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './SongCard.css'
import { getGigById, getPlaylistSongs, submitNewRequest } from '../../../services/http.service';

export default function SongSelector() {

    // 1
    const { gigId } = useParams();
    // const [userType, setuserType] = useState(false);
    const [playlistId, setPlaylistId] = useState();
    // 1
    const [playlist, setPlaylist] = useState([]);

    // somehow get the data out of the paramaters of the url

    // const navigate = useNavigate();

    // 2
    useEffect(() => {
        getGigData();
    }, [])

    // 5
    useEffect(() => {
        if (playlistId !== undefined) {
            getPlaylist(playlistId);
        }
    }, [playlistId]);

    // 3
    function getGigData() {
        getGigById(gigId)
            .then(response => {
                console.log(response.data)
                // 4
                setPlaylistId(response.data.spotify_playlist_id) // 64576e5r475367i
            })
            .catch()
    }

    // 6
    function getPlaylist(playlistId) {

        getPlaylistSongs(playlistId)
            .then(response => {
                // 7
                setPlaylist(response.data.items)
            })
            .catch()
    }

    return (
        <div>
            <h2>Choose Song to Request</h2>
            <div className='song-container' >
                {/* 8 */}
                {playlist.map((song, i) => (
                    <Song key={song.track.id}
                        {...song.track}
                        gigId={gigId}
                        albumUrl={song.track?.album?.images[0]?.url}
                    />
                ))}
            </div>

        </div>
    )
}

function Song({ id, albumUrl, name, artists, gigId }) {

    function handleSongClicked() {
        // send a POST to our API to request this song for a given gig
        submitNewRequest(gigId, id)
            .then((response) => {
                alert("Your song request was submitted!")
            }).catch((err) => {
                console.error(err)
            });
    }

    return (
        <div className={`song-card`} onClick={handleSongClicked} >
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