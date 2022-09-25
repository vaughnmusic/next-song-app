import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getPlaylistSongs, submitNewRequest } from '../../../services/http.service';

export default function SongSelector() {
    return (
        <div>SongSelector</div>
    )
}

function PickSongRequest() {

    const [userType, setuserType] = useState(false);
    const [playlist, setPlaylist] = useState([]);
    const [formData, setFormData] = useState({
        showId: '',
        venue: '',
        playlist_id: '',
    });

    // somehow get the data out of the paramaters of the url
    const gigId = "7ctf3QMZ96SDPD4nzjHwb1"

    const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        getPlaylist()
    }, [])

    function handleFormSubmit(e) {
        e.preventDefault();

        // '7ctf3QMZ96SDPD4nzjHwb1'

        // 'create the song request' via http POST request
        submitNewRequest(gigId, song_id)
            .then(() => {
                console.log("Song request was successfully submitted")
                // navigate('/audience')
            })
            .catch()
        // setFormData(formData.venue, playlist[selectedPlaylistIndex].id, formData.date)
    }

    function getPlaylist() {
        getPlaylistSongs()
            .then(response => {
                setPlaylist(response.data.items)
                console.log(response.data.items)
            })
            .catch()
    }

    return (
        <form onSubmit={handleFormSubmit} >
            <h2>Choose Song to Request</h2>
            <div className='song-container' >
                {playlist.map((songs, i) => (
                    <div key={i}
                        className={`song ${selectedPlaylistIndex === i ? 'selected' : ''}`}
                        onClick={() => setSelectedPlaylistIndex(i)}
                    >
                        {songs.name}
                    </div>
                ))}
            </div>

            <button type='submit'
                onSubmit={handleFormSubmit}
                className='create-request-button' >
                Send Song Request
            </button>
        </form>
    )
}
