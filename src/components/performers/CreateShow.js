import './CreateShow.css';
import React, { useEffect, useState } from 'react'
import { getCurrentUsersPlaylists } from '../../services/http.service';
import { submitNewShow } from '../../services/http.service';
import { Link, useNavigate } from 'react-router-dom';
// import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation';
// import { Route } from 'react-router-dom';

export default function CreateShow() {

    // function handleFormSubmit(e) {

    //     e.preventDefault();

    //     http.postNewShow(userId, formData.showId, formData.playlistId, date)
    //         .then((response) => {
    //             // setFormData(response.data);
    //             window.location.reload();
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }


    // use for loading animations----
    // if (playlists === undefined) {
    //     return <LoadingAnimation />
    // } else {
    //     return (
    //         <div>
    //             {playlists.map(playlist => (
    //                 <p>{playlist.name}</p>
    //             ))}
    //         </div>
    //     )
    // }

    return (
        <div>
            <NewShowForm />
        </div>
    )
}

function NewShowForm() {

    const [userType, setuserType] = useState(false);
    const [playlists, setPlaylists] = useState([]);
    const [formData, setFormData] = useState({
        showId: '',
        venue: '',
        date: new Date()
    });

    const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(0)

    const navigate = useNavigate();

    useEffect(() => {
        getPlaylists()
    }, [])

    function handleFormSubmit(e) {
        e.preventDefault();


        submitNewShow(formData.venue, playlists[selectedPlaylistIndex].id, formData.date)
            .then(() => {
                console.log("show was created")
                // links back to performerHub -- not sure if this works yet

                navigate('/performer')
            })
            .catch
    }

    function getPlaylists() {
        getCurrentUsersPlaylists()
            .then(response => {
                setPlaylists(response.data.items)
                // setPlaylists(response.data.items.images)
                console.log(response.data.items)
                console.log(response.data.items.images)
            })
            .catch()
    }

    function newShowPlaylist() {
        // getAllSongs()
        //     .then(response => {
        //         setnewShowPlaylist(response.data.items)


        //     }
        //     )
    }

    // function handleFormSubmit(e) {
    //     e.preventDefault();
    //     setuserType(true);
    // }

    return (
        <form onSubmit={handleFormSubmit} className='create-show-form' >
            <h2 className='create-show-title' >Create a New Show</h2>
            <div className='create-show-inputs' >
                <input className='input-field'
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    placeholder='Venue'
                />
                <br></br>
                <input className='input-field' type="text" placeholder='City, State'></input>
            </div>
            <div className='playlist-container' >
                {playlists.map((playlist, i) => (
                    <div key={i}
                        className={`playlists ${selectedPlaylistIndex === i ? 'selected' : ''}`}
                        onClick={() => setSelectedPlaylistIndex(i)}
                    >
                        {playlist.name}
                    </div>
                ))}
            </div>

            <button type='submit'
                onSubmit={handleFormSubmit}
                className='create-show-button' >
                Create Show
            </button>
        </form>
    )
}




// let key = {
//     name: 'C major',
//     flats: [],
//     sharps: []
// }

// let key2 = {
//     name: 'Bb major',
//     flats: [
//         'Bb',
//         'Eb'
//     ],
//     sharps: []
// }


// key2 // { name: 'Bb major', flats: ['Bb', 'Eb'], sharps: []}
// key2.flats // ['Bb', 'Eb']
// key2.flats[0] // 'Bb'
// key2.flats[1] // 'Eb'