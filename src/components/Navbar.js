// src/components/Navbar.js
import React, {useState} from 'react';
import './Navbar.css'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery)
  };


  return (
    <nav className="navbar">
      <div className='logo'>
        <img src='https://t3.ftcdn.net/jpg/04/74/05/94/240_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg' alt="YouTube Logo" />
      </div>
      <form className='search-form' onSubmit={handleSearchSubmit}>
        <input
        type="text"
        placeholder='Search'
        value={searchQuery}
        onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className='actions'>
        <button className='upload'>Upload</button>
        <button className='notification-bell'>Notifications</button>
        <div className='user-account'>
          <img src="tbd" alt="User Avatar" />
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
