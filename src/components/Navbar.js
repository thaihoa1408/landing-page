import React from 'react';

function Navbar(props) {
  return (
    <nav
      className='navbar fixed-top  navbar-expand-lg navbar-light bg-light'
      data-aos='fade-down'
    >
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img src='img/logo.png' alt='' className='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#services'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#features'>
                Features
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#reviews'>
                Reviews
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#blog'>
                Blog
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
