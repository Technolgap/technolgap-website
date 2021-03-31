import styles from "./Footer.module.scss";
import {useState} from "react";

const LeftGraphic =  require("../../images/Footer/LeftGraphic.svg");
const RightGraphic =  require("../../images/Footer/RightGraphic.svg");

const Facebook = require("../../images/Footer/Facebook.svg");
const FacebookHovered = require("../../images/Footer/FacebookHovered.svg");
const Instagram = require("../../images/Footer/Instagram.svg");
const InstagramHovered = require("../../images/Footer/InstagramHovered.svg");
const Medium = require("../../images/Footer/Medium.svg");
const MediumHovered = require("../../images/Footer/MediumHovered.svg");
const Linkedin = require("../../images/Footer/Linkedin.svg");
const LinkedinHovered = require("../../images/Footer/LinkedInHovered.svg");
const Twitter = require("../../images/Footer/Twitter.svg");
const TwitterHovered = require("../../images/Footer/TwitterHovered.svg");


const Footer = () => {

    const [IGhovered, setIGHovered] = useState(false);
    const [FBhovered, setFBHovered] = useState(false);
    const [TWhovered, setTWHovered] = useState(false);
    const [LKhovered, setLKHovered] = useState(false);
    const [MDhovered, setMDHovered] = useState(false);


return <div className={styles.Footer}>
    <div className={styles.WhiteBackground}></div>
    <div className={styles.AlmondBackground}>
        <img src = {LeftGraphic} className = {styles.Graphic}/>
        <div className={styles.Icons}>
            <a onClick={instagramLink} onMouseEnter={() => setIGHovered(true)} onMouseLeave={() => setIGHovered(false)}>
                <img src= {IGhovered?InstagramHovered:Instagram} className = {styles.Socials}/>
            </a>
            <a onClick={mediumLink} onMouseEnter={() => setMDHovered(true)} onMouseLeave={() => setMDHovered(false)}>
                <img src= {MDhovered?MediumHovered:Medium} className = {styles.Socials}/>
            </a>
            <a onClick={twitterLink} onMouseEnter={() => setTWHovered(true)} onMouseLeave={() => setTWHovered(false)}>
                <img src= {TWhovered?TwitterHovered:Twitter}  className = {styles.Socials}/>
            </a>
            <a onClick={linkedinLink} onMouseEnter={() => setLKHovered(true)} onMouseLeave={() => setLKHovered(false)}>
                <img src= {LKhovered?LinkedinHovered:Linkedin}  className = {styles.Socials}/>
            </a>
            <a onClick={facebookLink} onMouseEnter={() => setFBHovered(true)} onMouseLeave={() => setFBHovered(false)}>
                <img src= {FBhovered?FacebookHovered:Facebook} className = {styles.Socials}/>
            </a>
        </div>
    <img src = {RightGraphic} className = {styles.Graphic}/>
    </div>
    </div>;}

function linkedinLink(){
    location.href = 'https://www.linkedin.com/company/technolgap/mycompany';
}

function twitterLink(){
    location.href = 'https://twitter.com/technolgap';
}

function facebookLink(){
    location.href = 'https://www.facebook.com/technolgap';
}

function mediumLink(){

}

function instagramLink(){
    location.href = 'https://www.instagram.com/technolgap';
}

export default Footer;