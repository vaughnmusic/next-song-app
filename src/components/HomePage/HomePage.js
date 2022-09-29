import React, { useEffect, useState } from 'react'
import { useSpotify } from '../../hooks/useSpotify';
import './HomePage.css'
import { getPlaylist } from '../../services/http.service'
import crowdMain from '../../images/crowdMain.png';

export default function HomePage() {

    function onSpotifyWebPlaybackSDKReady() {
        // window.onSpotifyWebPlaybackSDKReady = () => {
        //     const token = 'BQBi0mwKwzTu6XBmM3lc0BlUSZVdHwm6k5bVheTqhTvzQRi4OxI03h1A4BjcCmVfqr2ATnZpPYBBhS3ko2gHtNFs4878q7YwmDKDenfxe6JbIMNifvAeVXqWj9k3BONkvA0h8hQm-XKMuJ9VsTqY0FiHoBcYxgchNPrP1TbRr3xCf1A';
        //     const player = new Spotify.Player({
        //         name: 'Web Playback SDK Quick Start Player',
        //         getOAuthToken: cb => { cb(token); },
        //         volume: 0.5
        //     })
        // }
    }

    const [testValue, setTestValue] = useState();

    useEffect(() => {
        fetchPlaylist();
    }, [])


    // this is using my actual playlist id 
    function fetchPlaylist() {
        getPlaylist('7ctf3QMZ96SDPD4nzjHwb1?si=da7d061fc1d046c1')
            .then(({ data }) => {
                console.log(data);
            });
    }

    return (

        <div>
            <h1>Next Song</h1>
        </div>

    )
}
