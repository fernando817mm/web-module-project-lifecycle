import React from 'react';

const User = props => {
    const { user } = props;
    return (
        <div>
            <img src={user.avatar_url} alt={user.name}/>
        </div>
    )
}

export default User;