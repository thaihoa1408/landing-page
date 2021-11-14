import React from 'react';

function Services(props) {
  return (
    <section id='services' className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 section-intro text-center' data-aos='fade-up'>
            <h1>Our services</h1>
            <div className='divider'></div>
            <p>
              Our service portfolio covers an entire software development life
              cycle and meets varied business needs.
            </p>
          </div>
        </div>
        <div className='row g-4'>
          <div className='col-md-4' data-aos='zoom-in'>
            <div className='service'>
              <div className='service-img'>
                <img src='img/service_1.jpeg' alt='' />
                <div className='icon'>
                  <i className='icon-browser'></i>
                </div>
              </div>
              <h5 className='mt-5 pt-4'>Custom software development</h5>
              <p className='text-justify'>
                We plan tailored software solutions for you to achieve
                operational excellence and deliver them fast and error-free.
              </p>
            </div>
          </div>
          <div className='col-md-4' data-aos='zoom-in'>
            <div className='service'>
              <div className='service-img'>
                <img src='img/service_2.jpg' alt='' />
                <div className='icon'>
                  <i className='icon-bargraph'></i>
                </div>
              </div>
              <h5 className='mt-5 pt-4'>Software product development</h5>
              <p className='text-justify'>
                We help startups and ISVs envision selling SaaS, mobile and
                desktop products, launch MVP in 1-4 months and consistently grow
                it to a full-blown product with major releases every 2-4 weeks.
              </p>
            </div>
          </div>
          <div className='col-md-4' data-aos='zoom-in'>
            <div className='service'>
              <div className='service-img'>
                <img src='img/service_3.png' alt='' />
                <div className='icon'>
                  <i className='icon-tools-2 '></i>
                </div>
              </div>
              <h5 className='mt-5 pt-4'>
                Maintenance and support of existing software
              </h5>
              <p className='text-justify'>
                We provide 24/7 support for your employees and customers,
                continuous software performance monitoring, proactive
                optimization and fast issue resolution, safely add new features
                and integrations, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
