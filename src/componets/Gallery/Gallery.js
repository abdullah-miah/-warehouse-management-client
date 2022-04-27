import React from 'react';

const Gallery = () => {
    return (
        <div className='w-75 mx-auto'>
            {/* <!-- Gallery --> */}
            <h2 className='text-center text-primary my-5'>Gallery Inside</h2>
<div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={"https://media.istockphoto.com/photos/beautiful-wedding-couple-cuddling-on-their-wedding-day-picture-id1300471625?b=1&k=20&m=1300471625&s=170667a&w=0&h=Q2AKZC_PwFj5656tpqRu2jsAzo00x7bXLVAtDd1Nph8="}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={"https://assets.vogue.in/photos/61f7d768839ccec28b8f9eb7/2:3/w_2560%2Cc_limit/272755788_331154152226647_3296372124077936147_n.jpg"}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={"https://thumbs.dreamstime.com/b/child-birthday-party-blowing-candles-cake-being-helped-friends-mother-53863329.jpg"}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img style={{height: '550px'}}
      src={"https://www.imagesplatform.com/mohsin_site/uploads/2020_02_18/birthday-girl-in-pink-dress.jpg"}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={"https://www.sony-asia.com/image/09ab57a0aa096113a1fec93d5bdc6b97?fmt=png-alpha&wid=1200"}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={"https://wallpapercave.com/wp/wp5609310.jpg"}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
{/* <!-- Gallery --> */}
        </div>
    );
};

export default Gallery;