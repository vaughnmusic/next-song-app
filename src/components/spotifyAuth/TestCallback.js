import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../App';

export default function TestCallback() {

    // const [token, setToken] = useState("")
    const { token, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash

        if (!token && hash) {
            console.info(hash)
            let authData = hash.substring(1).split("&");
            console.log(authData)

            let newToken = authData.find(elem => elem.startsWith("access_token")).split("=")[1]
            // let tokenType = authData.find(elem => elem.startsWith("token_type")).split("=")[1]
            // let expireTime = authData.find(elem => elem.startsWith("expires_in")).split("=")[1]

            window.location.hash = ""
            setToken(newToken);
            navigate('/entry');
        }


        console.log('callback init')
    }, [])

    useEffect(() => {
        if (token) {
            navigate('/entry')
        }
    }, [token])


    return (
        <div>
            Next Song
            <p>{token}</p>
        </div>
    )
}
