// src/components/Navbar.js
import React, { useState } from 'react';
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
      <div>
        <a href='http://localhost:3000/'>
        <img src={`${process.env.PUBLIC_URL}/yt-logo.png`} alt="Logo" className='img-resize' />
        </a>
      </div>
      <form className='search-container' onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder='Search'
          id="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button id="search-btn" type="submit">🔍</button>
      </form>
      <div className='actions'>
        <div>
        <button className='upload'>Upload</button>
        <div>
        </div>
        <button className='notification-bell'>Notifications</button>
        </div>
        <div className='user-account'>
          <img src="tbd" alt="User Avatar" />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
