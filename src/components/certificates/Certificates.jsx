import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Certificates.css"

const certificates = [
  { title: 'HTML5 / CSS3/ GIT/ VSCode', image: `${process.env.PUBLIC_URL}/images/certificates/module-1.svg` },
  { title: 'JavaScript/ Variables/ Loops/ Selections/ Data Types', image: `${process.env.PUBLIC_URL}/images/certificates/module-2.svg` },
  { title: 'JavaScript/ DOM Manipulation/ User Events/ Page LifeCycle', image: `${process.env.PUBLIC_URL}/images/certificates/module-3.svg` },
  { title: 'CSS/ FLEXBOX/ Responsive/ Mobile-First', image: `${process.env.PUBLIC_URL}/images/certificates/module-4.svg` },
  { title: 'Bootstrap/ SASS/ Animations', image: `${process.env.PUBLIC_URL}/images/certificates/module-5.svg` },
  { title: 'AJAX/ HTTP/ ES6/ Promises/ async/await', image: `${process.env.PUBLIC_URL}/images/certificates/module-6.svg` },
  { title: 'Software Engineering/ State Elevation/ React Router/ Component Updates/ React Hooks', image: `${process.env.PUBLIC_URL}/images/certificates/module-8.svg` },
  { title: 'REDUX/ Pure Functions/ State Management/ Reducers/ Actions/ Storage/ TypeScript', image: `${process.env.PUBLIC_URL}/images/certificates/module-9.svg` },
  { title: 'NodeJS/ ExpressJS/ Middlewares/ File System', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-1.svg` },
  { title: 'NodeJS/ ExpressJS/ Heroku/ Vercel/ Cloudinary', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-2.svg` },
  { title: 'MongoDB/ Mongoose/ NoSQL Databases', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-3.svg` },
  { title: 'PostgreSQL/ Sequelize/ SQL Databases', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-4.svg` },
  { title: 'Cryptography/ Authentication/ Authorization/ BCrypt/ JWT/ OAuth', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-5.svg` },
  { title: 'Cloud/ CICD/ SocketIO/ Tests', image: `${process.env.PUBLIC_URL}/images/certificates/module-2-6.svg` },
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
    <Slider id="certificates" {...settings}>
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
