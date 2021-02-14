import styles from "./Programs.module.scss";
import Title from "../Title/Title"

const DevelopmentIcon = require("../../images/Programs/devProgramIcon.svg");
const MentorshipIcon = require("../../images/Programs/mentorshipProgramIcon.svg");
const SocialMediaIcon = require("../../images/Programs/socialMediaProgramIcon.svg");

const MentorshipDescription = "Technolgap places a lot of emphasis on peer-mentoring. We have a series of mentorship programs where upper-year students can mentor first year students or high schoolers, helping them navigate the world of tech and explore their interests.";
const SocialMediaDescription = "Technolgap’s social media team is comprised of content creators and designers, who use our platform to highlight leaders within our community, and share resources appealing to other women in tech.";
const DevelopmentDescription = "All the unique tools we use internally are built by a talented group of developers within our organization. Girls of all backgrounds and experience levels collaborate to build projects such as this website and a series of slack bots that make conversations within Technolgap easier."

const MentorshipTitle = "mentorship"
const SocialMediaTitle = "social media"
const DevelopmentTitle = "development"

const Program = ({ icon, title, description }) => (
    <div className={styles.Program}>
        <img src={icon} className={styles.responsive} />
        <h2> {title} </h2>
        <p> {description} </p>
    </div>
);

const ProgramsList = [
    <Program key="MentorshipProgram" icon={MentorshipIcon} title={MentorshipTitle} description={MentorshipDescription} />, 
    <Program key="SocialMedia" icon={SocialMediaIcon} title={SocialMediaTitle} description={SocialMediaDescription} />, 
    <Program key="Development" icon={DevelopmentIcon} title={DevelopmentTitle} description={DevelopmentDescription} />, 
]


const ProgramGallery = () => 
    <div> 
    <Title underlineTop="2350px" titleTop="2200px" text={<h1>programs</h1>}/>
    <div className={styles.Programs}>
        {ProgramsList}
    </div>
</div>

export default ProgramGallery;





