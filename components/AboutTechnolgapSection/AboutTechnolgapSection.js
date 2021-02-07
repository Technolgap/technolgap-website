import styles from "./AboutTechnolgapSection.module.scss";
import Link from 'next/link';

const AboutTechnolgapSection = () => <div className={styles.AboutTechnolgapSection}> 
    <div className={styles.jumbotron}>
        <h1 className={styles.WITTitle}>what is technolgap?</h1>
        <p className={styles.WITText}><strong>Technolgap</strong> started as a slack group for women technology-related post-secondary programs in Ottawa to share job postings, articles, and scholarships with each other. Since then, the group has grown to over 100 members and acts as a safe space for women in technology to connect.</p>
        <div className={styles.centering}>
            <Link href="/about"><button type="button" className={styles.WITButton}>about us</button></Link>
            <Link href="/signup"><button type="button" className={styles.WITButton}>sign up</button></Link>
        </div>
    </div>
</div>;

export default AboutTechnolgapSection;