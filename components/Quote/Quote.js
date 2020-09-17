import styles from "./Quote.module.scss";

function Quote(props) {
    const {space, boxHeight, shadowColour, borderColour, text} = props;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.shadowBox} style={{backgroundColor: shadowColour, height: boxHeight}}>
                    <div className={styles.whiteBox} style={{border: '3px solid', borderColor: borderColour, height: boxHeight}}>
                        <p className={styles.textBox} style={{padding: space}}> {text}</p>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}

/*const Quote = () => <div className={styles.Quote}> 
    
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
    <div className={styles.container}>
        <div className={styles.TBUnderline}>
                    
        </div>
        <div className={styles.TBTitle}>
            <h1>the problem</h1>
        </div>
        <div className={styles.TBText}>
            <p>There is a significant underrepresentation of women in software development roles, with women holding only 26% of computing roles in 2014. (etc. (content not written yet))</p>
        </div>
    </div>
    
</div>;*/

export default Quote;