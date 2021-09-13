// bringing in React and the useState and useEffect Hooks
import React, { useState, useEffect } from 'react';

// decalring the github api link as a variable
const gitHubUrl = 'https://api.github.com/users/RJKAZ';

function GithubUser() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className='GithubApp'>
      <header className='GithubApp-header'>
        <h2>Github User Data</h2>
      </header>
      <div className='user-container'>
        <h5 className='info-item'>{userData.name}</h5>
        <h5 className='info-item'>{userData.public_repos}</h5>
        <h5 className='info-item'>{userData.bio}</h5>
        <h5 className='info-item'>{userData.follwers}</h5>
        <h5 className='info-item'>{userData.following}</h5>
      </div>
    </div>
  );
}

export default GithubUser;
