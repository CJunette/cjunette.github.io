import {NavBar} from "../../../components/NavBar";
import {BackText} from "../../../components/BackText";
import {AboutMeDetails} from "./AboutMeDetails";
import {useState} from "react";
import {BackToTop} from "../../../components/BackToTop";


export const AboutMePage = () => {
    return (
        <div>
            <NavBar/>
            <AboutMeDetails />
            <BackText text="BackHomepage"/>
            <BackToTop />
        </div>
    );

}