import {NavBar} from "./NavBar";
import {useLocation} from "react-router-dom";
import {readProjectData} from "./readProjectData";
import {Col, Container} from "react-bootstrap";


export const ProjectDetails = () => {
    const location = useLocation();
    const suffix = location.pathname.split('/')[1]; // 获取路径中的 suffix 参数，即页面是projects还是publications。
    const project_name = location.pathname.split('/')[2]; // 获取路径中的 key 参数，即页面是哪个具体项目。
    const projects = readProjectData(suffix);
    const project_index = projects.findIndex(project => project.key === project_name);
    const project = projects[project_index];

    if (!project) {
        return <div>Project Missing</div>;
    }

    return (
        <section className="projectDetails">
            <Container className="content_container">
                <div className="project-details-container">
                    <div className="project-details-box">
                        <h1>{project.title}</h1>
                        <h3>{project.duration}</h3>
                        {project.publication.link && project.publication.link.trim() !== "" ? (
                            <div className="h3-div">
                                <h3>Publication: </h3>
                                <a href={project.publication.link} target="_blank" rel="noopener noreferrer">
                                    <h3>{project.publication.description}</h3>
                                </a>
                            </div>
                        ) : project.publication.description && project.publication.description.trim() !== "" && (
                            <div className="h3-div">
                                <h3>{project.publication.description}</h3>
                            </div>
                        )}
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
                                    <div key={index} className="img-container">
                                        <img src={content.image.endsWith('.gif') ? require(`../assets/img/${content.image.split('.gif')[0]}.gif`) : require(`../assets/img/${content.image}`)}
                                             alt={`${content.description}`}
                                        /> {/* 这里的路径编写有点奇怪，最好不要做修改 */}
                                        <h5>{content.description}</h5>
                                    </div>
                                )
                            } else if (content.paragraph) {
                                return (
                                    // <span key={index}>{content.paragraph}</span>
                                    <span key={index} dangerouslySetInnerHTML={{ __html: content.paragraph.replace(/\n/g, '<br />') }}></span>
                                );
                            } else if (content.redirect) {
                                let redirectLink = "";
                                if (content.link && content.link.trim() !== "") {
                                    redirectLink = content.link;
                                }
                                return (
                                    <span key={index}>
                                        {content.redirect}
                                        <a href={redirectLink}>
                                            {content.link}
                                        </a>
                                    </span>
                                )
                            } else if (content.iframe) {
                                return (
                                    <div key={index}  className="iframe-container">
                                        <iframe
                                            key={index}
                                            src={content.iframe}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen>
                                        </iframe>
                                        <h5>{content.description}</h5>
                                    </div>
                                )
                            } else if (content.video) {
                                return (
                                    <div key={index} className="video-container">
                                        <video controls>
                                            <source src={require(`../assets/img/${content.video}`)} type="video/mp4"/>
                                        </video>
                                        <h5>{content.description}</h5>
                                    </div>
                                );
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