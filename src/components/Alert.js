import React, { useState } from 'react';

function Alert() {
  const [phrase, setPhrase] = useState('');

  if (phrase === 'Hello React') {
    alert('you may pass!');
  }

  return (
    <div className='alertApp'>
      <h2>Whats the secret phrase?</h2>
      <input
        type='text'
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder='enter a secret'
      />

      <p>
        Hint: Its <strong>Hello React</strong>
      </p>
    </div>
  );
}

export default Alert;
