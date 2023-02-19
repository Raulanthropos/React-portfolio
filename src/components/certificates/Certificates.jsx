import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Certificates.css"

const certificates = [
  { title: 'Certificate 1', image: `${process.env.PUBLIC_URL}/images/certificates/module-1.svg` },
  { title: 'Certificate 2', image: `${process.env.PUBLIC_URL}/images/certificates/module-2.svg` },
  { title: 'Certificate 3', image: `${process.env.PUBLIC_URL}/images/certificates/module-3.svg` },
  { title: 'Certificate 4', image: `${process.env.PUBLIC_URL}/images/certificates/module-4.svg` },
  { title: 'Certificate 5', image: `${process.env.PUBLIC_URL}/images/certificates/module-5.svg` },
  { title: 'Certificate 6', image: `${process.env.PUBLIC_URL}/images/certificates/module-6.svg` },
  { title: 'Certificate 8', image: `${process.env.PUBLIC_URL}/images/certificates/module-8.svg` },
  { title: 'Certificate 9', image: `${process.env.PUBLIC_URL}/images/certificates/module-9.svg` },
  { title: 'Certificate 1', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-1.svg` },
  { title: 'Certificate 2', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-2.svg` },
  { title: 'Certificate 3', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-3.svg` },
  { title: 'Certificate 4', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-4.svg` },
  { title: 'Certificate 5', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-5.svg` },
  { title: 'Certificate 6', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-6.svg` },
];

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button type="button" className="slick-prev"></button>,
    nextArrow: <button type="button" className="slick-next"></button>,
  };

  return (
    <Slider {...settings}>
      {certificates.map((certificate, index) => (
        <div key={index}>
          <h3>{certificate.title}</h3>
          <img className='slider-image' src={certificate.image} alt={certificate.title} />
        </div>
      ))}
    </Slider>
  );
};

export default Certificates;
