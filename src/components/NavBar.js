import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Nav.Link as={HashLink} to="/#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Chang Liu 刘畅</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/*<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>*/}
                        <Nav.Link as={HashLink}  to="/#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link as={HashLink} to="/#publications" className={activeLink === 'publications' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => onUpdateActiveLink('publications')}>Publications</Nav.Link>
                        <Nav.Link as={HashLink} to="/#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
              <div className="social-icon">
              </div>
            </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
