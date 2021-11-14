import React from 'react';

function About(props) {
  return (
    <section
      id='about'
      className='bg-cover hero-section'
      style={{
        backgroundImage: 'url(img/3.jpeg)',
      }}
    >
      <video src='img/video-1.webm' autoPlay loop muted />
      <div className='overlay'></div>
      <div className='container text-white text-center'>
        <div className='row'>
          <div className='col-12 section-intro text-center' data-aos='fade-up'>
            <h1>Watch our video</h1>
            <div className='divider'></div>
            <p>
              Founded in 1989, ScienceSoft is a provider of IT consulting and
              software development services. Having started as a small AI
              product company, we switched to IT services in 2002 and ever since
              we have helped non-IT organizations and software product companies
              improve business performance and quickly win new customers.
            </p>
            <a href='#' className='video-btn'>
              <i class='bx bx-play'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
