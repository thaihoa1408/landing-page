import React from 'react';

function Section(props) {
  return (
    <section
      id='home'
      className='bg-cover hero-section'
      style={{
        backgroundImage: 'url(img/section.jpg)',
      }}
    >
      <div className='overlay'></div>
      <div className='container text-white text-center'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-8'>
            <h1 className='display-6' data-aos='zoom-in'>
              SOFTWARE CONSULTING AND DEVELOPMENT <br />
              FOR YOUR DIGITAL SUCCESS
            </h1>
            <p className='my-4' data-aos='fade-up'>
              Since 1989. For millions of users. We transform businesses with
              powerful and adaptable digital solutions that satisfy the needs of
              today and unlock the opportunities of tomorrow.
            </p>
            <a href='#' className='btn btn-main' data-aos='fade-up'>
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
