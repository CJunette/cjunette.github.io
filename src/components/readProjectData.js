import projectOrder from "../assets/texts/projectOrder.json";

export const loadProjectData = () => {
    const projectOrder = require('../assets/texts/projectOrder.json');
    // console.log(1)
    // console.log(projectOrder)
    const projectFiles = require.context('../assets/texts/publications', false, /\.json$/);
    // console.log(2)
    // console.log(projectFiles.keys())
    const projects = projectFiles.keys()
        .map((file) => ({...projectFiles(file), key: file.replace('./', '').replace('.json', '')}))
        .filter((project) => projectOrder[project.key] !== undefined)
        .sort((a, b) => projectOrder[a.key] - projectOrder[b.key]);
    // console.log(3)
    // console.log(projects)
    return projects;
};