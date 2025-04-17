import {Banner} from "./Banner";
import {Skills} from "./Skills";
import {Experience} from "./Experience";
import {Projects} from "./Projects";
import {Publications} from "./Publications";
import {Contact} from "./Contact";
import {Footer} from "./Footer";
import {NavBar} from "./NavBar";
import {BackTop} from "./BackTop";

export const Home = () => {
    return (
        <div className="App">
            <NavBar/>
            <Banner />
            {/*<Skills />*/}
            <Experience />
            <Publications />
            {/*<Projects />*/}
            {/*<Contact />*/}
            {/*<Footer />*/}
            <BackTop />
        </div>
    );
};