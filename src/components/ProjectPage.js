import {NavBar} from "./NavBar";
import {useLocation} from "react-router-dom";
import {loadProjectData} from "./readProjectData";


export const ProjectPage = () => {
    const location = useLocation();
    const {project_index} = location.state || {}; // 获取传递的 project_index 参数
    const projects = loadProjectData();
    const project = projects[project_index];

    if (!project) {
        return <div>项目未找到</div>;
    }

    return (
        <div className="projectPage">
            <NavBar/>
            <div className="project-details">
                <h1>{project.title}</h1>
                <h2>{project.duration}</h2>
            </div>
        </div>
    );

}