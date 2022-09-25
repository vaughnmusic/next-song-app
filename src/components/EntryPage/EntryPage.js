import React, { useEffect } from 'react'
import './EntryPage.css'
import crowd from '../../images/crowd.png'; // Tell webpack this JS file uses this image
import performer from '../../images/performer.png';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function EntryPage() {

    const [userType, setUserType] = useLocalStorage('userType')
    const navigate = useNavigate();

    useEffect(() => {
        if (userType) {
            navigate('/' + userType);
        }
    }, []);

    function handleAudienceClicked() {
        //save option in local storage
        setUserType('audience');
        //navtgate to /audience 
        navigate('/audience');
    }

    function handlePerformerClicked() {
        //save option in local storage
        setUserType('performer');
        //navtgate to /performer 
        navigate('/performer');

    }

    return (
        <div>
            <h2 className='pick-path-title' >Who are you?</h2>
            <div className='entry-images-container'>

                <div className='user-choice' onClick={handlePerformerClicked} >
                    <img
                        className='performer'
                        src={performer}
                    />
                    <h3>Performer</h3>
                </div>

                <div className='user-choice' onClick={handleAudienceClicked} >
                    <img className='crowd' src={crowd} />
                    <h3>Audience</h3>
                </div>

            </div>
        </div>
    )
}
