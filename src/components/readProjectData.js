export const readProjectData = (suffix) => {
    const orderContext = require.context('../assets/texts', false, /Order\.json$/);

    function loadOrder(suffix) {
        const fileName = `./${suffix}Order.json`;
        // 确保路径正确，可能需要调整匹配逻辑
        return orderContext(fileName);
    }
    const projectOrder = loadOrder(suffix);

    // const orderPath = `../assets/texts/${suffix}Order.json`;
    // const projectOrder = require(`../assets/texts/publicationsOrder.json`);
    // console.log(1)
    // console.log(projectOrder)

    const allFilesContext = require.context('../assets/texts', true, /\.json$/);

    function getProjectFiles(suffix) {
        const targetPathPrefix = `./${suffix}/`; // 定义目标路径格式（如 ./publications/xxx.json）
        return allFilesContext.keys()// 过滤出匹配路径的文件
            .filter(path => path.startsWith(targetPathPrefix))
            .map(path => {
                const key = path.replace(targetPathPrefix, '').replace('.json', '');
                let value = allFilesContext(path); // 将 path 对应的对象存入字典
                value["key"] = key; // 添加 key 属性
                return value;
            });
    }
    const projectFiles = getProjectFiles(suffix)

    const projects = projectFiles
        .filter((project) => projectOrder[project.key] !== undefined)
        .sort((a, b) => projectOrder[a.key] - projectOrder[b.key])

    // console.log(projects)
    // const projectFiles = getProjectFiles("publications");
    // console.log(projectFiles)
    // const projects = projectFiles
    //     .map(file => (file.replace('./', '').replace('.json', '')))
    //     .filter((project) => projectOrder[project.key] !== undefined)
    //     .sort((a, b) => projectOrder[a.key] - projectOrder[b.key]);
    // const projectFiles = require.context(`../assets/texts/publications`, false, /\.json$/);
    // console.log(typeof projectFiles)

    // console.log(2)
    // console.log(projectFiles.keys())
    // const projects = projectFiles
    //     .map((file) => ({...projectFiles(file), key: file.replace('./', '').replace('.json', '')}))
    //     .filter((project) => projectOrder[project.key] !== undefined)
    //     .sort((a, b) => projectOrder[a.key] - projectOrder[b.key]);


    // console.log(3)
    // console.log(projects)
    return projects;
};