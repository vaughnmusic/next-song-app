import React from 'react'
import './LoadingAnimation.css'

export default function LoadingAnimation() {
    return (
        <div className="container">
            <div className="container__logo">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ITunes_12.2_logo.png/768px-ITunes_12.2_logo.png" alt="musicforall" /> */}
                <div className="logo__box">
                    <div className="box__icon"></div>
                </div>
            </div>
        </div>
    )
}
