import {NavBar} from "./NavBar";
import {useLocation} from "react-router-dom";
import {readProjectData} from "./readProjectData";
import {Col, Container} from "react-bootstrap";


export const ProjectDetails = () => {
    const location = useLocation();
    const {project_index} = location.state || {}; // 获取传递的 project_index 参数
    const projects = readProjectData();
    const project = projects[project_index];

    if (!project) {
        return <div>项目未找到</div>;
    }

    return (
        <section className="projectDetails">
            <Container className="content_container">
                <div className="project-details-container">
                    <div className="project-details-box">
                        <h1>{project.title}</h1>
                        <h3>{project.duration}</h3>
                        <div className="h3-div">
                            <h3>Publication: </h3>
                            {project.publication.link && project.publication.link.trim() !== "" ? (
                                <a href={project.publication.link} target="_blank" rel="noopener noreferrer">
                                    <h3>{project.publication.description}</h3>
                                </a>
                            ) : (
                                <h3>{project.publication.description}</h3>
                            )}
                        </div>
                        {project.author_list.map((author_dict, index) => {
                            return (
                                Object.entries(author_dict).map(([key, value]) => (
                                    <span key={index} style={{color: value}} className="span-name">
                                  {key}{index !== project.author_list.length - 1 && ', '}
                              </span>
                                ))
                            )
                        })}
                        <br/>
                        <br/>
                        <br/>
                        {project.full_text.map((content, index) => {
                            if (content.image) {
                                return (
                                    <div key={index}>
                                        <img src={content.image.endsWith('.gif') ? require(`../assets/img/${content.image.split('.gif')[0]}.gif`) : require(`../assets/img/${content.image}`)}
                                             alt={`${content.description}`}
                                        /> {/* 这里的路径编写有点奇怪，最好不要做修改 */}
                                        <h5>{content.description}</h5>
                                    </div>
                                )
                            } else if (content.paragraph) {
                                return (
                                    <span key={index}>{content.paragraph}</span>
                                );
                            } else if (content.redirect) {
                                let redirectLink = "";
                                if (content.link && content.link.trim() !== "") {
                                    redirectLink = content.link;
                                }
                                return (
                                    <span>
                                        <br/>
                                        <br/>
                                        {content.redirect}
                                        <a href={redirectLink}>
                                            {content.link}
                                        </a>
                                    </span>
                                )
                            } else if (content.video) {
                                return (
                                    <div className="iframe-container">
                                        <iframe
                                            src={content.video}
                                            title="video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen>
                                        </iframe>
                                    </div>

                                )
                            }
                        })}
                    </div>
                </div>
                <div>
                    <br/>
                </div>
            </Container>
        </section>
    );
}