import React from "react";
import { Col, Row, Image } from "react-bootstrap";

export default function Skills() {

    const images = [
        {
          url: "https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png",
          alt: "HTML",
          caption: "HTML5",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
          alt: "CSS",
          caption: "CSS3",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
          alt: "js",
          caption: "JavaScript",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          alt: "React",
          caption: "ReactJS",
        },
        {
          url: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
          alt: "redux",
          caption: "Redux",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
          alt: "node",
          caption: "NodeJS",
        },
        {
          url: "https://skillshack.blob.core.windows.net/uploads/express.webp",
          alt: "express",
          caption: "ExpressJS",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
          alt: "mongo",
          caption: "MongoDB",
        },
        {
          url: "https://ezerus.com.au/wp-content/uploads/2019/05/postgresql-logo.png",
          alt: "postgres",
          caption: "PostgreSQL",
        },
        {
          url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
          alt: "git",
          caption: "Git",
        }
      ];

      return (
        <div>
            <h2 style={{textAlign: "center", marginBottom: "10px"}}><strong>My skills</strong></h2>
          <Row className="d-flex flex-wrap justify-content-center align-items-center">
            {images.map((image, index) => (
              <Col xs={2} key={index} className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                <Image src={image.url} alt={image.alt} thumbnail fluid style={{ width: '80px', height: '80px' }} roundedCircle/>
                <h4>{image.caption}</h4>
              </Col>
            ))}
          </Row>
        </div>
      );
    }