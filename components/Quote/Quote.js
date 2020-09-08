import styles from "./Quote.module.scss";

const Quote = () => <div className={styles.Quote}> 
    <div className={styles.WITRedBlock}>
        <div className={styles.WITWhiteBlock}>
            <div className={styles.WITUnderline}>
                
                </div>
            <div className={styles.WITTitle}>
                <h1>who is technolgap?</h1>
            </div>
            <div className={styles.WITText}>
                <p>Until recently, it wasn’t a big part of Carleton University’s culture to share information between students. Co-founders Alexa Liaskovski and Gina Bak noticed this gap between the information about opportunities and the women studying computer science and related disciplines at Carleton and wanted to close it. <br></br><br></br>In February 2020, <strong>Technolgap</strong> started as a slack group for women to share job postings, articles, and scholarships with each other. Since then, the group has grown to over 100 members and acts as a safe space for women in technology to connect.</p>
            </div>
        </div>
    </div>
</div>;

export default Quote;