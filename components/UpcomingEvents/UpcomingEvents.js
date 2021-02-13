import styles from "./UpcomingEvents.module.scss";

const UpcomingEvents = () => 
<div className={styles.backgroundSection}>
    <div className={styles.titleBackground}>
        <h1 className={styles.title}>upcoming events</h1>
    </div>
    <p className={styles.paragraph}><strong>Technolgap</strong> is dedicated to sharing knowledge and information. Check out our upcoming events, all lead and organized by women in tech! We have three main categories of events; professional development, technical, and health and wellness.</p>
</div>;

export default UpcomingEvents;