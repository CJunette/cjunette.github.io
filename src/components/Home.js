import {Banner} from "./Banner";
import {Skills} from "./Skills";
import {Experience} from "./Experience";
import {Projects} from "./Projects";
import {Contact} from "./Contact";
import {Footer} from "./Footer";
import {NavBar} from "./NavBar";
import {BackText} from "./BackText";
import {BackToTop} from "./BackToTop";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    return (
        <div className="App">
            <NavBar/>
            <Banner />
            {/*<Skills />*/}
            <Experience />
            <Projects suffix="publications"/>
            <Projects suffix="projects"/>
            {/*<Contact />*/}
            {/*<Footer />*/}
            {/*<BackText text="BackTop"/>*/}
            <BackToTop />
        </div>
    );
};