import React, { useEffect, useState } from 'react'
import './RequestPage.css';
import { getSongRequests, getTracks } from '../../services/http.service';
import { useParams } from 'react-router-dom';

export default function RequestPage() {

    // 1
    const { gigId } = useParams();
    // 1
    const [requests, setRequests] = useState([]); // {id: string, song_id: string, gig_id: string}[]
    // 1
    const [songs, setSongs] = useState([]); // SpotifySong[]

    // 2
    useEffect(() => {
        getRequests();
    }, []);

    // 5
    useEffect(() => {
        if (requests !== []) {
            // exe 6 here
            getSongData()
        }
    }, [requests]);

    // 3 - send http GET request
    function getRequests() {
        getSongRequests(gigId)
            .then(response => {
                // 4
                setRequests(response.data)
            }).catch((err) => {
                console.log('there was a problem getting your requests')
                alert("There was a problem loading the song request. Try again.")
            });
    }

    // 6 
    function getSongData() {
        getTracks(requests.map(req => req.song_id))
            .then(response => {
                // 7
                setSongs(response.data.tracks)
                console.log(response.data)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className='song-container' >
                {/* 8 */}

                {songs.map((song, i) => (
                    <Request key={song.id}
                        {...song}
                        gigId={gigId}
                        albumUrl={song.album?.images[0]?.url}
                    />
                ))}

            </div>

        </div>
    )
}

function Request({ id, albumUrl, name, artists, gigId }) {

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
