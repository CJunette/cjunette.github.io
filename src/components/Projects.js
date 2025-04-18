import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import {readProjectData} from "./readProjectData";
import { useEffect } from "react";

export const Projects = ({suffix}) => {
    const projects = readProjectData(suffix)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <section className="project" id={suffix} key={suffix}>
            <Container className="content_container">
                <h2>
                    {suffix.charAt(0).toUpperCase() + suffix.slice(1)}
                </h2>
                {projects.map((project, index) => {
                    return (
                        <ProjectCard project_index={index} suffix={suffix} key={`${suffix}-${index}`}/>
                    )
                })}
                <hr className="split-line"/>
            </Container>
        </section>
    )
}
