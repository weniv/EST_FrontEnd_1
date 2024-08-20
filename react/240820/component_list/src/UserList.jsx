import React from 'react';
import User from './User';

export default function UserList({ users }) {
    return (
        <dl>
            {users.map((user) => {
                return <User key={user.id} user={user} />
            })}
        </dl>
    )
}
