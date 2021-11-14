import React from 'react';

function Reviews(props) {
  return (
    <section id='reviews' className='text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 section-intro text-center' data-aos='fade-up'>
            <h1>Our Testimonials</h1>
            <div className='divider'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className='row gx-4 gy-5 text-start'>
          <div className='col-md-4' data-aos='fade-up'>
            <div className='review p-5'>
              <div className='person pb-4'>
                <img src='img/review_1.jpg' alt='' />
                <div className='text ms-3'>
                  <h6 className='mb-0'>John Walker</h6>
                  <small>CEO of Google</small>
                </div>
              </div>
              <p className='pt-4'>
                K.O Dev helped us with the development of our frontend for
                meta.us. I have found them to be flexible and willing to go the
                extra mile in meeting client needs.
              </p>
              <div className='stars'>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
              </div>
            </div>
          </div>
          <div className='col-md-4' data-aos='fade-up'>
            <div className='review p-5'>
              <div className='person pb-4'>
                <img src='img/review_2.jpg' alt='' />
                <div className='text ms-3'>
                  <h6 className='mb-0'>Scarlet Johansson</h6>
                  <small>CEO of BAV</small>
                </div>
              </div>
              <p className='pt-4'>
                K.O Dev is a great choice for extended your development team.
                With their talented developer pool, they helped us release key
                features fast by supplementing our team. Their work was top
                notch.
              </p>
              <div className='stars'>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
              </div>
            </div>
          </div>
          <div className='col-md-4' data-aos='fade-up'>
            <div className='review p-5'>
              <div className='person pb-4'>
                <img src='img/review_3.jpg' alt='' />
                <div className='text ms-3'>
                  <h6 className='mb-0'>Ritesh Angular</h6>
                  <small>CEO of ABC</small>
                </div>
              </div>
              <p className='pt-4'>
                The team at K.O Dev has played a key role in bringing You
                Predict to market. Technically strong & driven, they’ve been
                responsive to the shifting priorities that are innate to the
                startup process.
              </p>
              <div className='stars'>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
