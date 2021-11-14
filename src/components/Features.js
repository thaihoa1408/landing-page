import React from 'react';

function Features(props) {
  return (
    <section id='features' className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 section-intro text-center' data-aos='fade-up'>
            <h1>Our Features</h1>
            <div className='divider'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className='row gx-4 gy-5'>
          <div className='col-md-4 feature' data-aos='fade-up'>
            <div className='icon'>
              <i className='icon-laptop'></i>
            </div>
            <h5 className='mt-4 mb-3'>Web Applications</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='col-md-4 feature' data-aos='fade-up'>
            <div className='icon'>
              <i className='icon-tablet'></i>
            </div>
            <h5 className='mt-4 mb-3'>Mobile Apps</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='col-md-4 feature' data-aos='fade-up'>
            <div className='icon'>
              <i className='icon-cloud'></i>
            </div>
            <h5 className='mt-4 mb-3'>Cloud Applications</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='col-md-4 feature' data-aos='fade-up'>
            <div className='icon'>
              <i className='icon-lifesaver'></i>
            </div>
            <h5 className='mt-4 mb-3'>SaaS products</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='col-md-4 feature' data-aos='fade-up'>
            <div className='icon'>
              <i className='icon-desktop'></i>
            </div>
            <h5 className='mt-4 mb-3'>Desktop Applications</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='col-md-4 feature' data-aos='fade-up'>
            <div className='icon'>
              <i className='icon-clipboard'></i>
            </div>
            <h5 className='mt-4 mb-3'>Libraries</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
