import React from 'react';
import '../styles/UserAvatar.css';
import '../styles/responsive.css';

function UserAvatar({ image, user, Icon }) {
    return (
        <div className="userAvatar">
            <div className="userAvatar__card">
                {image ?
                    <img src={image} alt="" />
                    :
                    <Icon />
                }
            </div>
            <h4>{user}</h4>
        </div >
    )
}

export default UserAvatar
