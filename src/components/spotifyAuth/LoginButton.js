import React, { useEffect } from 'react'
// import { bars } from '@fortawesome/free-solid-svg-icons'


export default function LoginButton() {

    const CLIENT_ID = 'e912533024aa4f52b3c8fdde33fb71bc'; // Your client id
    const REDIRECT_URI = 'http://localhost:3000/callback'; // Your redirect uri
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    useEffect(() => {
        window.localStorage.removeItem("token")
    }, [])

    return (

        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            <button className='login-out-button' >
                Login
            </button>
        </a>

    )
}
