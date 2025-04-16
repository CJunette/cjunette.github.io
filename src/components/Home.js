import {Banner} from "./Banner";
import {Skills} from "./Skills";
import {Experience} from "./Experience";
import {Projects} from "./Projects";
import {Publications} from "./Publications";
import {Contact} from "./Contact";
import {Footer} from "./Footer";
import {NavBar} from "./NavBar";

export const Home = () => {
    return (
        <div className="App">
            <NavBar/>
            <Banner />
            {/*<Skills />*/}
            <Experience />
            <Projects />
            <Publications />
            <Contact />
            <Footer />
        </div>
    );
};