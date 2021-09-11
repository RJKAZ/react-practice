import React from 'react'
import users from "../data/users-data";

const Loop = () => {
    return (
        <div className="App">
            <h1>Loop over and display data with JSX</h1>
            <div className="users">
                {users.map((user, index) => (
                    <div key={index}>
                        <h3>{user.name}</h3>
                        <p>{user.species}</p>
                        <p>{user.weakness}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Loop
