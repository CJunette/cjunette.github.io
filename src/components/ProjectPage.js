import {NavBar} from "./NavBar";
import {useLocation, useParams} from "react-router-dom";
import {readProjectData} from "./readProjectData";
import {ProjectDetails} from "./ProjectDetails";
import {BackText} from "./BackText";
import {BackToTop} from "./BackToTop";

export const ProjectPage = () => {
    const location = useLocation();
    // const {project_index} = location.state || {}; // 获取传递的 project_index 参数
    // const {suffix} = location.state || {}; // 获取传递的 project_index 参数
    const suffix = location.pathname.split('/')[1]; // 获取路径中的 suffix 参数，即页面是projects还是publications。
    const project_name = location.pathname.split('/')[2]; // 获取路径中的 key 参数，即页面是哪个具体项目。
    const projects = readProjectData(suffix);
    const project_index = projects.findIndex(project => project.key === project_name);
    const project = projects[project_index];

    if (!project) {
        return <div>Project Missing</div>;
    }

    return (
        <div className="projectPage">
            <NavBar/>
            <ProjectDetails/>
            <BackText text="BackHomepage"/>
            <BackToTop />
        </div>
    );
}