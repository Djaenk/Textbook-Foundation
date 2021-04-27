import React, { useEffect } from 'react';


export const ProfileInfo = props =>  {

    const [profile, setProfile] = React.useState([]);

    useEffect(() => {
        props.profilePromise.then(profileValue => {
                setProfile(profileValue.data);
            })
        });

        return <> 
        <div className="border bg-secondary text-white rounded p-5">   
         {profile.map((profile, index) =>
             <div key={index}>
                 <h3>{(profile.private && profile.userID != sessionStorage.getItem('userId')) ? ("Private Profile") : (`${profile.firstName} ${profile.lastName}`)}</h3>
                 <p>{profile.username}</p>
                 <br/>
                 <p>{(profile.private && profile.userID != sessionStorage.getItem('userId')) ? ("") : (`${profile.phoneNumber}`)}<br/>
                 {(profile.private && profile.userID != sessionStorage.getItem('userId')) ? ("") : (`${profile.email}`)}<br/>
                 Member since {profile.joinDate.substring(0,10)}<br/>
                 Account Privacy: {profile.private ? "Private":"Public"}</p>
            </div> )}</div>
        </>;
    }
