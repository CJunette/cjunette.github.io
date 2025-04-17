import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {readProjectData} from "./readProjectData";

export const Projects = () => {
    const projects = readProjectData("projects")
    return (
        <section className="project" id="projects">
            <Container className="content_container">
                <h2>
                    Projects
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
