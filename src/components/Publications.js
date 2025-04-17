import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {readProjectData} from "./readProjectData";
import {useEffect, useState} from "react";

export const Publications = () => {
    const projects = readProjectData("publications")
    return (
        <section className="project" id="publications">
            <Container className="content_container">
                <h2>
                    Publications
                </h2>
                {projects.map((project, index) => (
                    <Row key={project.key}>
                        <ProjectCard project_index={index}/>
                    </Row>
                ))}
                <hr className="split-line"/>
            </Container>
        </section>
    )
}
