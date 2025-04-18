import {useState, useEffect} from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import icon_up_arrow from "../assets/img/icon-up-arrow_2.svg"


export const BackToTop = () => {
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

    const clickToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Navbar expand="md" className="back-top-nav-bar">
            <div  className={scrolled ? "scrolled-back-top" : "not-scrolled-back-top"}>
                <img onClick={clickToTop} src={icon_up_arrow} className="back-top-img"/>
            </div>
        </Navbar>
    )
}
