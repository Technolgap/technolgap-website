import styles from "./ContactSection.module.scss";

const ContactSection = () => <div className={styles.ContactSection}> 
    <div className={styles.jumbotron}>
        <h1 className={styles.HQTitle}>have questions?</h1>
        <p className={styles.HQText}><strong>Email us!</strong> We’ll do our best to get back to you within four business days.</p>
        <div className={styles.centering}>
            <button type="button" href="#" className={styles.HQButton}>email us</button>
        </div>
    </div>
</div>;

export default ContactSection;