import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {useEffect, useState} from "react";
import {readProjectData} from "./readProjectData";
import {useNavigate} from "react-router-dom";

export const ProjectCard = ({project_index, suffix}) => {
    const projects = readProjectData(suffix);

    const project = projects[project_index];
    const colRightSizes = project.cover !== "" ? {xs: 8, md: 8, xl: 8} : {xs: 12, md: 12, xl: 12};
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/${suffix}/${project.key}`, {state: {project_index, suffix}});
        window.scrollTo(0, 0);
    };

    return (
        <div className="proj-box"
            // onClick={handleCardClick}
            // style={{cursor: "pointer"}}
        >
            {/*<a href={`/project/${project.key}`}>*/}
            <div className={"proj-box-content"}>
                <Row key={project.title} className="proj-box-container">
                    {project.cover !== "" && (
                        <Col xs={4} md={4} xl={4}>
                            <a href={`/${suffix}/${project.key}`}>
                                <img
                                    src={project.cover.endsWith('.gif') ? require(`../assets/img/${project.cover.split('.gif')[0]}.gif`) : require(`../assets/img/${project.cover}`)}
                                    alt={`${project.title} image`}
                                /> {/* 这里的路径编写有点奇怪，最好不要做修改 */}
                            </a>
                        </Col>)}
                    <Col {...colRightSizes}>
                        <a href={`/${suffix}/${project.key}`}>
                            <div>
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
                                <h4><br/></h4>
                            </div>
                        </a>

                        {project.publication.link && project.publication.link.trim() !== "" ? (
                            <a href={project.publication.link} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} id="publication">
                                <h4>Publication: {project.publication.description}</h4>
                            </a>
                        ) : (
                            project.publication.description && project.publication.description.trim() !== "" && (
                                <h4>Publication: {project.publication.description}</h4>
                            ))}
                    </Col>
                </Row>
            </div>

            {/*</a>*/}
        </div>
    )
}
