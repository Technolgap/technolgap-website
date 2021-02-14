import styles from "./Title.module.scss";

function Title(props) {
    
    const {underlineTop, titleTop, text, space} = props;
    //let u=titleTop+150;
    //shouldn't have to write coordinates 150px greater each time a title is created
    //should just be made here 
    //const underline = 150;
    return (
        <>
            <div className={styles.container}>
                <div id="underlineId" className={styles.underline} style={{top: underlineTop}}></div>
                <div className={styles.title} style={{top: titleTop}}>
                    {text}
                </div>
            </div>
        </>
    )
}
export default Title;