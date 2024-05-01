import React, { useContext } from 'react';
import { AuthContext } from './UserContext';

const UserAbout = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <span>{user?.email}</span>
        </div>
    );
};

export default UserAbout;