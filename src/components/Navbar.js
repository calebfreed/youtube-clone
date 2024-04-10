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
      <div>
      <img src={`${process.env.PUBLIC_URL}/yt-logo.png`} alt="Logo" className='img-resize' />
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
