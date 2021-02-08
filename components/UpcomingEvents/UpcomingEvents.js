import styles from "./UpcomingEvents.module.scss";

const UpcomingEvents = () => 
<div className={styles.backgroundSection}> 
    <div className={styles.title}>
        <h1 className={styles.UpcomingEvents}>upcoming events</h1>
        <p className={styles.paragraph}><strong>Technolgap</strong> is dedicated to sharing knowledge and information. Check out our upcoming events, all lead and organized by women in tech! We have three main categories of events; professional development, technical, and health and wellness.</p>
    </div>
</div>;

export default UpcomingEvents;