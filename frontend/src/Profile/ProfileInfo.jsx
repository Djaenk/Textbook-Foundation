import React, { useEffect } from 'react';


export const ProfileInfo = props => <>
    {
        props.profilePromise.map(profile =>
            <ul className="list-group" key={profile.userID}>
                <li className="list-group-item">User ID: {profile.userID}</li>
                <li className="list-group-item">User Name: {profile.username}</li>
                <li className="list-group-item">Fisrt Name: {profile.firstName}</li>
                <li className="list-group-item">Last Name: {profile.lastName}</li>
                <li className="list-group-item">Phone Number: {profile.phoneNumber}</li>
                <li className="list-group-item">Email: {profile.email}</li>
                <li className="list-group-item">Join Date: {profile.joinDate}</li>
                <li className="list-group-item">Account Privacy: {profile.private ? "Private":"Public"}</li>
            </ul>)
    }
</>;