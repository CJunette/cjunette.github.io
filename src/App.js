import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Experience} from "./components/Experience";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {ProjectPage} from "./components/ProjectPage";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import {AboutMePage} from "./assets/custom_pages/AboutMe/AboutMePage";


function App() {
    return (
        <Router>
            {/*<div className="App">*/}
                {/*<NavBar/>*/}
                {/*<Banner/>*/}
                {/*/!*<Skills />*!/*/}
                {/*<Experience/>*/}
                {/*<Publications/>*/}
                {/*<Projects/>*/}
                {/*/!*<Contact />*!/*/}
                {/*/!*<Footer />*!/*/}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects/:key" element={<ProjectPage/>}/>
                    <Route path="/publications/:key" element={<ProjectPage/>}/>
                    <Route path="/aboutme" element={<AboutMePage/>}/>
                </Routes>
            {/*</div>*/}
        </Router>
    );
}

export default App;
