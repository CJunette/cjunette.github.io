# Personal Portfolio Website in React

Template from https://github.com/judygab/web-dev-projects

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[//]: # (<img width="1266" alt="Screen Shot 2022-06-19 at 2 18 18 PM" src="https://user-images.githubusercontent.com/50160672/174933373-1ba6cadf-1c9a-48c3-aa58-984d0bd62d82.png">)

Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css

In the /personal-portfolio, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### add the following to the values of "scripts" in package.json. 
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build -r https://github.com/CJunette/cjunette.github.io.git -b gh-pages"

---

## For deploying to github pages (or updating content on github pages):

### Use the following to add the dependency to the project. You need to update the node.js if necessary. (This is only necessary at first time or when you add new files.)

`yarn add gh-pages -D`

### Use the following code to deploy the code to github. 

`yarn deploy`

### Click github page - setting - pages, launch the site using the branch "gh-pages".

### If you use custom domain of github, you need to update it every time you deploy.

---

## How to build a website using this template.

1. For any project you want to put in the website, considering putting the text in "scr/assets/texts/projects" or "scr/assets/texts/publication" (there is no difference between this two types. By default, publication is before projects).
2. For relevant images, put them in "src/asset/img"
3. After adding the text and images, you need to update "projectsOrder.json" or "publicationsOrder.json" to define the order of each project.
4. Finally, use "yarn deploy" to update the website.