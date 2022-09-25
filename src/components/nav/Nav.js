////////
import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../../App';
import { useLocalStorage } from '../../hooks/useLocalStorage'
import LoginButton from '../spotifyAuth/LoginButton';
import LogoutButton from '../spotifyAuth/LogoutButton';
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
////////

/////////
export default function Nav() {
    /////////

    const location = useLocation();
    const { token } = useContext(AuthContext);
    const [navbarOpen, setNavbarOpen] = useState(false)

    useEffect(() => {
        // close the nav on navigate
        console.log("closing nav")
        closeMenu();
    }, [location]);
    //////////
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }
    //////////
    return (
        <>
            <button
                type='button'
                className='burger'
                onClick={handleToggle}
            >
                <FontAwesomeIcon icon={navbarOpen ? faX : faBars} />

            </button>

            <nav className={`menuNav ${navbarOpen ? "visible" : ""}`}>
                <ul className={`menuNav`}>
                    {/* <NavLink
                to={Link.path}
                activeClassName='active-link'
                onClick={() => closeMenu()}
                exact
                >
                {Link.text}
            </NavLink> */}
                    <div className='nav-links' >
                        <Link to="/">
                            Home
                        </Link>
                        {true && (
                            <Link to="/performer">
                                Requests
                            </Link>
                        )}
                        <Link to="/create">
                            Shows
                        </Link>
                        {/* need to fix below link -- not sure if working properly */}
                        <a target="_blank" href="https://open.spotify.com/collection/playlists">Playlists</a>
                    </div>
                </ul>
                <div>
                    {token && (
                        <LogoutButton onLogout={() => {
                            setNavbarOpen(false);
                        }} />
                    )}
                    {!token && (
                        <LoginButton />
                    )}
                </div>
            </nav>
        </>
    )
}


