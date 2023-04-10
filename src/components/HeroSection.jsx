import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import ContactForm from "./contactform/ContactForm";
import Projects from "./Projects";
import Skills from "./Skills";

export default function HeroSection() {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center my-5">
          <Col xs={12}>
            <div className="d-flex flex-column align-items-cente justify-content-center">
              <h5>Hello</h5>
              <h2>My name is Ioannis Psychias</h2>
              <h4>I'm a <strong>Full Stack Web Developer</strong></h4>
            </div>
          </Col>
          <Col
            xs={{ col: 12, order: "first" }}
            md={6}
            className="topPartRight "
          >
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={4} className="d-flex justify-content-center">
          <Image src="https://res.cloudinary.com/dlhs6o8ga/image/upload/v1681146653/meme_pcnark.png" alt="profileImg" rounded fluid />
          </Col>
          <Col xs={12} md={8}>
            <h3>About Me</h3>
            <p>
            As a full-stack web developer with a strong background in coordination and customer service, I bring a unique blend of technical and interpersonal skills to the table. My expertise in HTML, CSS, JavaScript, and frameworks such as React, Node.js, and Express.js, allow me to efficiently build, and deploy dynamic web applications. My experience with databases like MongoDB and PostgreSQL, as well as my familiarity with version control systems like Git, further support my ability to develop and manage high-quality, scalable web solutions. Additionally, my years of experience working with people in various customer-facing roles have honed my communication skills, potentially making me a valuable team player who is able to effectively collaborate with both clients and colleagues.Feel free to check my projects, and there's a feedback form on the bottom - let's get in touch!
            </p>
            <a href="/#contact">
              <Button>Contact me!</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Skills />
      <Projects />
      <ContactForm />
    </>
  );
}