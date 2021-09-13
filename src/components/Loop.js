// importing React (this is kind of optional)
import React from 'react'
// importing the user data which is in a javascript file, but modles after json data
import users from "../data/users-data";

// Declaring the functional component and calling it loop and useing an arrow function
// It returns the desired rendered HTML, but also takes in that imported user data and uses the map method that takes in two arguments
// the user and index. It then renders all of the data during the loop
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

// exporting the functional component 
export default Loop
