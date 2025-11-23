import React from 'react';

const Showcase = () => (
  <section className='showcase'>
    <div className="container">
      <div className="row row1">
        <div className="img-box">
          <img src="/img/showcase-photo3.jpg" alt="Deganvy" />
        </div>
        <div className="text-box">
          <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur...</p>
          <a href="/about" className='btn btn-secondary'>More</a>
        </div>
      </div>
      <div className="row row2">
        <div className="img-box">
          <img src="/img/showcase-photo1.jpg" alt="Desert" />
        </div>
        <div className="text-box">
          <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
          <p className='text-gray'>Lorem ipsum dolor sit amet consectetur...</p>
          <a href="/about" className='btn btn-secondary'>More</a>
        </div>
      </div>
    </div>
  </section>
);

export default Showcase;
