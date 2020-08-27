import styles from  "./ExecutiveTeam.module.scss";
import Title from "../Title/Title"

const AlexaIcon = require("../../images/Executives/AlexaIcon.svg");
const GinaIcon = require("../../images/Executives/GinaIcon.svg");
const KateIcon = require("../../images/Executives/KateIcon.svg");
const MargieIcon = require("../../images/Executives/MargieIcon.svg");
const MonicaIcon = require("../../images/Executives/MonicaIcon.svg");

const ExecutiveMember = ({ icon, name, title }) => (
    <div clasName={styles.Member}>
        <img src={icon} className={styles.responsive} />
        <h2> {name} </h2>
        <p>{title}</p>
    </div>
);

const Members = [
    <ExecutiveMember icon={AlexaIcon} name="Alexa Liaskovski" title="co-founder" />,
    <ExecutiveMember icon={GinaIcon} name="Gina Bak" title="co-founder" />,
    <ExecutiveMember icon={MargieIcon} name="Margie Venes" title="director of external communications" />,
    <ExecutiveMember icon={MonicaIcon} name="Monica Vu" title="director of development" />,
    <ExecutiveMember icon={KateIcon} name="Kate Allsebrook" title="director of engagement" />,
]

const ExecutiveTeam = () => 

<div className={styles.ExecutiveTeam}> 
    <Title> executive team </Title>
    <div className={styles.ExecutiveMembers}>
        {Members}
    </div>
</div>

export default ExecutiveTeam;