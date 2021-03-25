import styles from "./Title.module.scss";

function Title(props) {
    
    const {titleTop, text, space} = props;
    const underlineTop = titleTop+150;
    //let u=titleTop+150;
    //shouldn't have to write coordinates 150px greater each time a title is created
    //should just be made here 
    //const underlineTop = 150;
    return (
        <>
            <div className={styles.container}>
                <div id="underlineId" className={styles.underline} style={{top: `${underlineTop}px`}}></div>
                <div className={styles.title} style={{top: `${titleTop}px`}}>
                    {text}
                </div>
            </div>
        </>
        // <>
        //     <div className={styles.container}>
        //         <div id="underlineId" className={styles.titleBackground} style={{top: titleTop}}></div>
        //         <div className={styles.title2} style={{top: titleTop}}>
        //             {text}
        //         </div>
        //     </div>
        // </>

        // const UpcomingEvents = () => 
        // <div className={styles.backgroundSection}>
        //     <div className={styles.titleBackground}>
        //         <h1 className={styles.title}>upcoming events</h1>
        //     </div>
        //     <p className={styles.paragraph}><strong>Technolgap</strong> is dedicated to sharing knowledge and information. Check out our upcoming events, all lead and organized by women in tech! We have three main categories of events; professional development, technical, and health and wellness.</p>
        // </div>;
    )
}
export default Title;