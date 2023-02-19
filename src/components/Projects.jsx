import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            project: "Dog Tinder",
            image: "https://via.placeholder.com/320",
            description: "Our dog adoption platform connects dog pound owners and shelter representatives with potential adopters. If you're looking to adopt, create an account and browse through our extensive database of dogs in need of a forever home. You can filter your search by breed, age, location, and other criteria to find the perfect match for you. For dog pound owners and shelter representatives, our platform provides a streamlined way to manage dogs and connect with potential adopters. Create profiles for each dog, including photos and descriptions, and easily update their availability status. Our app is built using the MERN stack, ensuring a reliable, scalable, and user-friendly experience for all users. Join our dog adoption community today and help make a difference in the lives of dogs in need.",
            tech: "ReactJS Redux NodeJS ExpressJS MongoDB"
        },
        {
            project: "Job Search Engine",
            image: "https://via.placeholder.com/320",
            description: "newDescription",
            tech: "ReactJS Redux"
        },
        {
            project: "Personal blog",
            image: "https://via.placeholder.com/320",
            description: "handleDescription",
            tech: "ReactJS Redux NodeJS ExpressJS MongoDB"
        }
    ]

    return (
        <div>
            <h2 style={{textAlign: "center", marginBottom: "10px"}}><strong>My Projects</strong></h2>
          <Row className="d-flex flex-wrap justify-content-center align-items-center">
            {projects.map((project, index) => (
              <Col xs={3} key={index} className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                <Image src={project.image} alt={project.project} thumbnail fluid rounded/>
                <h4>{project.description}</h4>
                <p>{project.tech}</p>
              </Col>
            ))}
          </Row>
        </div>
      );

}