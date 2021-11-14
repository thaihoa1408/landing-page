import React from 'react';

function Counters(props) {
  return (
    <section
      className='bg-cover'
      style={{
        backgroundImage: 'url(img/4.jpg)',
      }}
    >
      <div className='overlay'></div>
      <div className='container text-white text-center'>
        <div className='row gy-4' data-aos='fade-up'>
          <div className='col-md-3'>
            <i className='icon-trophy h1'></i>
            <h1 className='mt-3 mb-2'>45,00</h1>
            <p>Awards Won</p>
          </div>
          <div className='col-md-3'>
            <i className='icon-camera h1'></i>
            <h1 className='mt-3 mb-2'>120k</h1>
            <p>Pictures Taken</p>
          </div>
          <div className='col-md-3'>
            <i className='icon-happy h1'></i>
            <h1 className='mt-3 mb-2'>30M+</h1>
            <p>Happy Client</p>
          </div>
          <div className='col-md-3'>
            <i className='icon-paintbrush h1'></i>
            <h1 className='mt-3 mb-2'>145,005</h1>
            <p>Theme Design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counters;
