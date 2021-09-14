import React from 'react';

const heros = [
  'Iron Man',
  'Thor',
  'Captain America',
  'Hulk',
  'Hawkeye',
  'Black Widow',
  'War Machine',
  'Spiderman',
  'Black Panther',
  'Captain Marvel',
  'Scarlet Witch',
  'Vision',
  'Antman',
  'The Wasp',
  'Star Lord',
];

const SearchList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = heros.filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className='heros'>
      <input
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
