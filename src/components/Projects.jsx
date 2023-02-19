import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Projects() {
    const projects = [
        {
            project: "Dog Tinder",
            image: "https://via.placeholder.com/320",
            description: "The dog adoption platform connects potential adopters with dog pound owners and shelter representatives. Users can create an account and search through a database of dogs using filters such as breed, age, and location. For dog pound owners and shelter representatives, the platform allows them to manage dogs and create profiles for each dog, including photos and descriptions.",
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
              <Col xs={12} md={6} lg={3} key={index} className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                <h2>{project.project}</h2>
                <h3>Technologies used: {project.tech}</h3>
                <Image src={project.image} alt={project.project} thumbnail fluid rounded/>
                <h4>{project.description}</h4>
              </Col>
            ))}
          </Row>
        </div>
      );

}