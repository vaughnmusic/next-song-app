import React, { useEffect, useState } from 'react'
import './Toast.css'

const Toast = (props) => {

    const { toastList, position } = props;
    const [list, setList] = useState(toastList);

    useEffect(() => {
        setList(toastList);
    }, [toastList, list]);

    return (
        <div className={`notification-container ${position}`}>
            <div className={`notification-toast ${position}`}>
                <button>
                    X
                </button>
                <div className='notification-image'>
                    <img src='' alt='' />
                </div>
                <div>
                    <p className='notification-title'>Next Song</p>
                    <p className='notification-message'>You have successfully submitted your song request!</p>
                </div>
            </div>
        </div>
    )
}

export default Toast;
