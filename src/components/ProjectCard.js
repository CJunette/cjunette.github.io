import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import {loadProjectData} from "./readProjectData";
import {useNavigate} from "react-router-dom";

export const ProjectCard = ({project_index}) => {
    const projects = loadProjectData()
    const project = projects[project_index];
    const colRightSizes = project.cover !== "" ? {xs: 8, md: 8, xl: 8} : {xs: 12, md: 12, xl: 12};

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/project/${project.key}`, {state: {project_index}});
    };
    return (
        <div className="proj-box"
             onClick={handleCardClick}
             style={{cursor: "pointer"}}>
            <div className={"proj-box-content"}>
                <Row key={project.title}>
                    {project.cover !== "" && (
                        <Col xs={4} md={4} xl={4}>
                            <img
                                src={require(`../assets/img/${project.cover}`)}
                                alt={`${project.title} image`}
                            /> {/* 这里的路径编写有点问题的，最好不要做修改 */}
                        </Col>)}
                    <Col {...colRightSizes}>
                        <h3>{project.title}</h3>
                        <h4>{project.duration}</h4>
                        {project.author_list.map((author_dict, index) => {
                            return (
                                Object.entries(author_dict).map(([key, value]) => (
                                    <span key={index} style={{color: value}}>
                                  {key}{index !== project.author_list.length - 1 && ', '}
                              </span>
                                ))
                            )
                        })}
                    </Col>
                </Row>
            </div>
        </div>
    )
}
