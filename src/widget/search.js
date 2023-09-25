import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import User from './User';


function generateRandomUser(id) {
  const di = ['disponible', 'on route', 'no work'];
  const names = ['John Doe', 'ziko wharani', 'Alice hamoudi', 'Bob Brown', 'Ella Davis', 'yasser ben', 'zoid kmoun', 'caliph ahmed', 'ahmed hasni', 'mehdi za3im', 'sifo blidi', 'sifo blidi'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomImage = `https://picsum.photos/150/150?random=${id}`; // Unique image URL for each user
  const randomNumbers = di[Math.floor(Math.random() * 3)]; // Generate a random number (1, 2, or 3)
  const rating = Math.floor(Math.random() * 5) + 1;
  return { id, name: randomName, image: randomImage, numbers: randomNumbers, rating: rating };
}

const Search = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Generate 10 users (you mentioned 10 in your code)
    const generatedUsers = Array.from({ length: 10 }, (_, index) => generateRandomUser(index + 1));

    setUsers(generatedUsers);
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  };

  // Define filteredUsers based on the search query
  let filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filteredUsers by rating (highest to lowest)
  filteredUsers = filteredUsers.sort((a, b) => b.rating - a.rating);

  return (
    <div className={`search_container ${DarkMode ? 'dark' : ''}`}>
      <button id='display' onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <a className="search_icon">
          <AiOutlineSearch />
        </a>
      </div>
      <div className={`users_container ${DarkMode ? 'dark' : ''}`}>
        {filteredUsers.map((user, index) => (
          <User
            key={index}
            id={user.id + "JobxC_worker" + user.id + 3 + "chad" + user.id + 300}
            name={user.name}
            image={user.image}
            num={user.numbers}
            rating={user.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
