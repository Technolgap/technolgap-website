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
     
    )
}
export default Title;