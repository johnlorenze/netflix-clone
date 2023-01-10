import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/User.css';
import '../styles/responsive.css'
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { actionTypes } from '../services/reducer';
import { useStateValue } from './StateProvider';

function User() {
    const [{ }, dispatch] = useStateValue();

    const login = (e) => {
        let username = e.currentTarget.querySelector("h4").innerHTML;
        let image = e.currentTarget.querySelector("img").getAttribute("src");

        dispatch({
            type: actionTypes.SET_USER,
            user: {
                username,
                image
            }
        });
    }

    return (
        <>
            <Nav />
            <div className="user">
                <div className="user__header">
                    <p>Who's Watching?</p>
                </div>
                <div className="user__avatar">
                    <Link to="/browse" onClick={login}>
                        <UserAvatar
                            user="Tommy"
                            image="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABbluOJk0KQhemtoe26zGG2qS3-u6TupQA2NpLMF158R5XkqI8hK8Wf2zOUuVXlV8GCvkGBO0atD04a95Hbov9tKHcIkl.png?r=9fe"
                        />
                    </Link>
                    <Link to="/browse" onClick={login}>
                        <UserAvatar
                            user="Arthur"
                            image="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABYHiBK5NB_kTeidXQerYlP-vuOSBKR6GL5dsN_w8VAPbtIvNbsgvKFF1Ls3CKntKwCu0362VYnnanfUMQeym4qSBv-r-.png?r=fdd"
                        />
                    </Link>
                    <Link to="/browse" onClick={login}>
                        <UserAvatar
                            user="Polly"
                            image="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABQxdkfR6CJpxz_y5X8HMSmF3h7pTR401_Duhdy1QeTw350PY88x-wVd5DODF4q7XNY3Fy0D9pJ3X3_LkVPjSunC-OCpD.png?r=071"
                        />
                    </Link>
                    <Link to="/browse" onClick={login}>
                        <UserAvatar
                            user="John"
                            image="https://occ-0-993-988.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZ6GbmDq7aFWMXB1FKpMz3E7ZDxlAFl3E5fS-dn_EULH6mGIvJ1NkywqGjKFiudxFLrDCJulLLF5FvaqEEick7Sdm12f.png?r=c13"
                        />
                    </Link>
                    <UserAvatar
                        user="Add Profile"
                        Icon={AddCircleIcon}
                    />
                </div>
                <div className="user__footer">
                    <a>MANAGE PROFILES</a>
                </div>
            </div>
        </>
    )
}

export default User
