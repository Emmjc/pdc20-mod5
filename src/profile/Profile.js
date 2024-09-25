import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css'; // Import the CSS file

function Profile({ user: { name, email, username } }) {
    return (
        <div className="profile-container"> 
            <h2>{name}</h2>
            <p>{email}</p>
            <p className="username">{username}</p>
        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired
};

export default Profile;
