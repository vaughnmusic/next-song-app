import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './SongCard.css'
import { getGigById, getPlaylistSongs, submitNewRequest } from '../../../services/http.service';

export default function SongSelector() {


    let { gigId } = useParams();
    const [playlistId, setPlaylistId] = useState()
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        getGigData();
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
                setPlaylistId(response.data.spotify_playlist_id) // 64576e5r475367i
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function getPlaylist(playlistId) {

        getPlaylistSongs(playlistId)
            .then(response => {
                setPlaylist(response.data.items)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div>
            <h2 className='song-select-title' >-select a song to make your request-</h2>
            <div className='song-container' >
                {playlist.map((song, i) => (
                    <Song key={song.track.id}
                        {...song.track}
                        gigId={gigId}
                        albumUrl={song.track?.album?.images[0]?.url}
                        className="playlist"
                    />
                ))}
            </div>

        </div>
    )
}


function Song({ id, albumUrl, name, artists, gigId }) {

    const navigate = useNavigate();

    function sendRequest() {

        submitNewRequest(gigId, id)
            .then(() => {
                console.log("song request submitted")

                navigate('/audience')
            })
            .catch((err) => {
                console.error(err);
            });

    }

    return (
        <div className={`song-card`}
            onClick={sendRequest}
        >
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