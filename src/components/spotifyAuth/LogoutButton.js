import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

export default function LogoutButton({ onLogout }) {

    const { unsetToken } = useContext(AuthContext);
    const navigate = useNavigate();

    function logout() {
        // remove token ???
        unsetToken && unsetToken();
        // nav to home ???
        navigate('/');
        onLogout && onLogout();
    }

    return (
        <button className='login-out-button' onClick={logout}>
            Logout
        </button>
    )
}
