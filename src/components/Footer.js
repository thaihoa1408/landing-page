import React from 'react';

function Footer(props) {
  return (
    <footer className='container-fluid py-2'>
      <div className='row'>
        <div className='col-md-6 d-flex align-items-center'>
          <p className='m-0'>Copyright 0 2015-2020. Designed By K.O Dev</p>
        </div>
        <div className='col-md-6 text-md-end'>
          <div>
            <a href='#' className='ms-1'>
              <i class='bx bxl-facebook-circle'></i>
            </a>
            <a href='#' className='ms-1'>
              <i class='bx bxl-twitter'></i>
            </a>
            <a href='#' className='ms-1'>
              <i class='bx bxl-dribbble'></i>
            </a>
            <a href='#' className='ms-1'>
              <i class='bx bxl-instagram'></i>
            </a>
            <a href='#' className='mx-1'>
              <i class='bx bxl-github'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
