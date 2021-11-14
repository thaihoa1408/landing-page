import React from 'react';

function Contact(props) {
  return (
    <section
      id='contact'
      className='bg-cover text-white'
      style={{
        backgroundImage: 'url(img/3.jpeg)',
      }}
    >
      <div className='overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 section-intro text-center' data-aos='fade-up'>
            <h1>Get in touch</h1>
            <div className='divider'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8 mx-auto' data-aos='fade-up'>
            <form action='#' className='row g-4'>
              <div className='form-group col-md-6'>
                <input
                  type='text'
                  placeholder='Full name'
                  className='form-control'
                />
              </div>
              <div className='form-group col-md-6'>
                <input
                  type='email'
                  placeholder='Email Address'
                  className='form-control'
                />
              </div>
              <div className='form-group col-md-12'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='form-control'
                />
              </div>
              <div className='form-group col-md-12'>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='4'
                  placeholder='message'
                  className='form-control'
                ></textarea>
              </div>
              <div className='text-center'>
                <button className='btn btn-main' type='submit'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
