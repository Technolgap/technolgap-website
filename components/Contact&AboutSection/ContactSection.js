import styles from "./Contact&AboutSection.module.scss";
import Link from 'next/link';

const ContactSection = () => <div className={styles.ContactSection}> 
    <div className={styles.jumbotron}>
        <h1 className={styles.HQTitle}>have questions?</h1>
        <p className={styles.HQText}><strong>Email us!</strong> We’ll do our best to get back to you within four business days.</p>
        <div className={styles.centering}>
            <Link href="/questions"><button type="button" className={styles.HQButton}>email us</button></Link> 
        </div>
    </div>
</div>;

export default ContactSection;
