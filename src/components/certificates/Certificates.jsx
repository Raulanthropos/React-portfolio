import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";

const certificates = [
  { title: "HTML5 / CSS3/ GIT/ VSCode", image: `${process.env.PUBLIC_URL}/images/certificates/module-1.svg` },
  { title: "JavaScript/ Variables/ Loops/ Selections/ Data Types", image: `${process.env.PUBLIC_URL}/images/certificates/module-2.svg` },
  { title: "JavaScript/ DOM Manipulation/ User Events/ Page LifeCycle", image: `${process.env.PUBLIC_URL}/images/certificates/module-3.svg` },
  { title: "CSS/ FLEXBOX/ Responsive/ Mobile-First", image: `${process.env.PUBLIC_URL}/images/certificates/module-4.svg` },
  { title: "Bootstrap/ SASS/ Animations", image: `${process.env.PUBLIC_URL}/images/certificates/module-5.svg` },
  { title: "AJAX/ HTTP/ ES6/ Promises/ async/await", image: `${process.env.PUBLIC_URL}/images/certificates/module-6.svg` },
  { title: "React/ Components/ SPAs/ State Management/ Component LifeCycle", image: `${process.env.PUBLIC_URL}/images/certificates/module-7.svg` },
  { title: "Software Engineering/ State Elevation/ React Router/ Component Updates/ React Hooks", image: `${process.env.PUBLIC_URL}/images/certificates/module-8.svg` },
  { title: "REDUX/ Pure Functions/ State Management/ Reducers/ Actions/ Storage/ TypeScript", image: `${process.env.PUBLIC_URL}/images/certificates/module-9.svg` },
  { title: "NodeJS/ ExpressJS/ Middlewares/ File System", image: `${process.env.PUBLIC_URL}/images/certificates/module-2-1.svg` },
  { title: "NodeJS/ ExpressJS/ Heroku/ Vercel/ Cloudinary", image: `${process.env.PUBLIC_URL}/images/certificates/module-2-2.svg` },
  { title: "MongoDB/ Mongoose/ NoSQL Databases", image: `${process.env.PUBLIC_URL}/images/certificates/module-2-3.svg` },
  { title: "PostgreSQL/ Sequelize/ SQL Databases", image: `${process.env.PUBLIC_URL}/images/certificates/module-2-4.svg` },
  { title: "Cryptography/ Authentication/ Authorization/ BCrypt/ JWT/ OAuth", image: `${process.env.PUBLIC_URL}/images/certificates/module-2-5.svg` },
  { title: "Cloud/ CICD/ SocketIO/ Tests", image: `${process.env.PUBLIC_URL}/images/certificates/module-2-6.svg` },
];

const PrevArrow = ({ className, style, onClick }) => (
  <button type="button" className={className} style={style} onClick={onClick} aria-label="Previous" />
);

const NextArrow = ({ className, style, onClick }) => (
  <button type="button" className={className} style={style} onClick={onClick} aria-label="Next" />
);

const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section id="certificates" className="py-20 lg:py-28">
      <div className="container px-6 mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certificates</h2>
        </div>

        <div className="certificates-slider card-surface p-6 sm:p-8">
          <Slider {...settings}>
            {certificates.map((certificate, index) => (
              <div key={index} className="text-center px-2">
                <h3 className="text-sm sm:text-base font-medium text-slate-300 mb-4 leading-snug">
                  {certificate.title}
                </h3>
                <img
                  className="slider-image mx-auto"
                  src={certificate.image}
                  alt={certificate.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
