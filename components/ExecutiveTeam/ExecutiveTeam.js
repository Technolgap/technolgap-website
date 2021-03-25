import styles from  "./ExecutiveTeam.module.scss";
import Title from "../Title/Title"

const AlexaIcon = require("../../images/Executives/AlexaIcon.svg");
const GinaIcon = require("../../images/Executives/GinaIcon.svg");
const KateIcon = require("../../images/Executives/KateIcon.svg");
const MargieIcon = require("../../images/Executives/MargieIcon.svg");
const MonicaIcon = require("../../images/Executives/MonicaIcon.svg");
const MuktaIcon = require("../../images/Executives/MuktaIcon.svg");
const NisthalIcon = require("../../images/Executives/NishthaIcon.svg");
const JoyceIcon = require("../../images/Executives/JoyceIcon.svg");

const ExecutiveMember = ({ icon, firstname, lastname, title }) => (
    <div className={styles.Member}>
        <img src={icon} className={styles.responsive} />
        <h2> {firstname} </h2>
        <h2> {lastname} </h2>
        <p>{title}</p>
    </div>
);

const Members = [
    <ExecutiveMember key="Alexa" icon={AlexaIcon} firstname="Alexa" lastname="Liaskovski" title="co-founder" />,
    <ExecutiveMember key="Gina" icon={GinaIcon} firstname="Gina" lastname="Bak" title="co-founder" />,
    <ExecutiveMember key="Margie" icon={MargieIcon} firstname="Margie" lastname="Venes" title="director of external communications" />,
    <ExecutiveMember key="Monica" icon={MonicaIcon} firstname="Monica" lastname="Vu" title="director of development" />,
    <ExecutiveMember key="Kate" icon={KateIcon} firstname="Kate" lastname="Allsebrook" title="director of engagement" />,
    <ExecutiveMember key="Mukta" icon={MuktaIcon} firstname="Mukta" lastname="Manhas" title="director of mentorship" />,
    <ExecutiveMember key="Nishtha" icon={NisthalIcon} firstname="Nishtha" lastname="Mavai" title="director of internal culture" />,
    <ExecutiveMember key="Joyce" icon={JoyceIcon} firstname="Joyce" lastname="Bacic" title="director of mental health and wellness" />,
]

const ExecutiveTeam = () => 

<div className={styles.ExecutiveTeam}> 
    <Title titleTop={2850} text={<h1>executives</h1>}/>
    <div className={styles.ExecutiveMembers}>
        {Members}
    </div>
</div>

export default ExecutiveTeam;