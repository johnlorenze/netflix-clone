import React, { useState, useEffect } from 'react';
import '../styles/Nav.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Nav() {
    const [{ user }] = useStateValue();
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => window.removeEventListener("scroll");
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <Link to="/user">
                <img
                    className="nav_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt=""
                />
                <img
                    className="nav_avatar"
                    src={user.image === 'undefined' ? "" : user.image}
                    alt=""
                />
            </Link>
        </div>
    )
}

export default Nav
