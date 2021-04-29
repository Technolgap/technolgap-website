import styles from "./Title.module.scss";

function Title(props) {
    
    const {titleTop, text, space} = props;
    const underlineTop = titleTop+150;

    //titletop should be 0, shouldnt need to get it as parameter
    //titles for exec and programs not works bc not in section like quote
    //once the title is in a section with the other items then remove titletop as paramter and replace with 0
    return (
        <>
            <div className={styles.container}>
                <div id="underlineId" className={styles.underline} style={{top: `${underlineTop}px`}}></div>
                <div className={styles.title} style={{top: `${titleTop}px`}}>
                {/* <div className={styles.title} style={{top: 0}}> */}
                
                 
                    {text}
                </div>
            </div>
        </>
     
    )
}
export default Title;