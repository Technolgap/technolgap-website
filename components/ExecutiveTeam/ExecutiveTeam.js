import styles from  "./ExecutiveTeam.module.scss";
import Title from "../Title/Title"

const AlexaIcon = require("../../images/Executives/AlexaIcon.svg");

const ExecutiveMember = ({ icon, name, title }) => (
    <div clasName={styles.Member}>
        <img src={icon} className={styles.responsive} />
        <p>{name}</p>
        <p>{title}</p>
    </div>
);

const Members = [
    <ExecutiveMember icon={AlexaIcon} name="Alexa Liaskovski" title="co-founder" />,
    <ExecutiveMember icon={AlexaIcon} name="Alexa Liaskovski" title="co-founder" />,
]

const ExecutiveTeam = () => 

<div className={styles.ExecutiveTeam}> 
    <Title> executive team </Title>
    <div className={styles.ExecutiveMembers}>
        {Members}
    </div>
</div>

export default ExecutiveTeam;