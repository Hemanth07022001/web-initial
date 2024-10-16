import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react"
let Form1=React.lazy(()=>import('./form'))
import { useState } from 'react';

library.add(faBars);

function WebHeading() {
    const [show, setShow] = useState(false);

    let toggleNav = () => {
        let navlinks = document.querySelector(".navlinks");
        navlinks.classList.toggle("active");
    };

    let signInForm = () => {
        setShow(true);
    };

    return (
        <>
            <nav className="navlinkshead">
                <div className="menu" onClick={toggleNav}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </div>
                <ul className="navlinks">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <div className="buttons">
                    <button className="button1" type="button">Sign-Up</button>
                    <button className="button1" type="button" onClick={signInForm}>Sign-In</button>
                </div>
            </nav>
            {show && <Form1 setShow={setShow}  />}
        </>
    );
}

export default WebHeading;
