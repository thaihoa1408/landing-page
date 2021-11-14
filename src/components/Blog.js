import React from 'react';

function Blog(props) {
  return (
    <section id='blog' className='bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 section-intro text-center' data-aos='fade-up'>
            <h1>Our Blog Posts</h1>
            <div className='divider'></div>
            <p>
              A relationship with Rockship means a relationship with a team of
              caring and experienced professionals who are always capable of
              anticipating and addressing all the project’s challenges.
            </p>
          </div>
        </div>
        <div className='row gx-4 gy-5 text-start'>
          <div className='col-md-4' data-aos='fade-up'>
            <div className='shadow px-4 py-3 h-100'>
              <img src='img/blog_1.png' alt='' />
              <div className='mt-4'>
                <small>
                  Posted in <a href='#'>Web Design</a>, 12 Dec 2020
                </small>
                <h5 className='mt-1 mb-2'>
                  <a href='#'>
                    Supply Chain Automation for Streamlined, Accurate Operations
                  </a>
                </h5>
                <p className='text-justify'>
                  In this article, Boris explains how supply chain operations
                  can be automated, including with the use of advanced
                  technologies. If you’re looking to introduce automation into
                  your company’s supply chain, please check ScienceSoft’s supply
                  chain management consulting offer
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4' data-aos='fade-up'>
            <div className='shadow px-4 py-3 h-100'>
              <img src='img/blog_2.png' alt='' />
              <div className='mt-4'>
                <small>
                  Posted in <a href='#'>Web Design</a>, 12 Dec 2020
                </small>
                <h5 className='mt-1 mb-2'>
                  <a href='#'>
                    Supply Chain Management Software: Reduce Supply Chain Risks
                  </a>
                </h5>
                <p className='text-justify'>
                  Boris overviews features and benefits of supply chain
                  management software. If you need assistance in implementing
                  SCM software for your business, please feel free to check
                  ScienceSoft’s supply chain management consulting offer.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4' data-aos='fade-up'>
            <div className='shadow px-4 py-3 h-100'>
              <img src='img/blog_3.png' alt='' />
              <div className='mt-4'>
                <small>
                  Posted in <a href='#'>Web Design</a>, 12 Dec 2020
                </small>
                <h5 className='mt-1 mb-2'>
                  <a href='#'>
                    Software for Strategic Sourcing: Optimize Supplier Search
                    and Onboarding
                  </a>
                </h5>
                <p className='text-justify'>
                  We explain the essence of eSourcing and review popular
                  sourcing tools. If you want to streamline your procurement
                  processes and establish long-term profitable relationships
                  with suppliers, you are welcome to turn to ScienceSoft’s
                  experts for software development consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
