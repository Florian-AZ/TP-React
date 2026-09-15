import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function    user() {
    let navigate = useNavigate();
    let { username } = useParams();
    return (
        <>
            <p>User name is : {username}</p>
            <button onClick={() => navigate(-1)}>⬅</button>
        </>
    )
}

export default user;