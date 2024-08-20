import React, { useState } from 'react';
import './User.css';

export default function User({ user }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <dt><button onClick={handleClick}>{user.name}</button></dt>
            <dd className={isActive ? 'active' : null}>
                <span>Email: {user.email}</span><br />
                <span>Job: {user.job}</span>
            </dd>
        </div>
    )
}
