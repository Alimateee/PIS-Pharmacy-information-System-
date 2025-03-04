import React, { useState } from "react";
import contactUsLogo from '/svg/call-outline.svg'
import logInLogo from '/svg/log-out-outline.svg'

export default function Header() {
    let [hover , setHover] = useState(false);
    let [hoverCall , setHoverCall] = useState(false);

    let handleMouseEnter = () => {
        setHover(true);
    }
    let handleMouseLeave = () => {
        setHover(false);
    }
    let handleMouseEnterCall = () => {
        setHoverCall(true);
    }
    let handleMouseLeaveCall = () => {
        setHoverCall(false);
    }
    return(
        <React.Fragment>
            <div className="container">
                <h1 className="headerTitle">Welcome to my little Pharmacy information system Project</h1>
                <div className="headerToolbar">
                    <button className="Log-btn" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
                        <img src={logInLogo} height={25} width={35} alt="LogIn" />
                        <span className="text-Login-btn">{hover ? "Log In" : ''}</span>
                    </button>
                    <button className="contact-btn" onMouseEnter={handleMouseEnterCall} onMouseLeave={handleMouseLeaveCall}>
                        <img src={contactUsLogo} width={30} height={25} alt="contactUs" />
                        <span className="text-call-btn">{hoverCall ? "Contact Us" : ''}</span>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}