import {NavBar} from "./NavBar";
import {useLocation} from "react-router-dom";
import {readProjectData} from "./readProjectData";
import {ProjectDetails} from "./ProjectDetails";


export const ProjectPage = () => {
    const location = useLocation();
    const {project_index} = location.state || {}; // 获取传递的 project_index 参数
    const projects = readProjectData();
    const project = projects[project_index];

    if (!project) {
        return <div>项目未找到</div>;
    }

    return (
        <div className="projectPage">
            <NavBar/>
            <ProjectDetails/>
        </div>
    );

}