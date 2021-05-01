import styles from "./Title.module.scss";

function Title(props) {
    
    const {text, space} = props;
    const underlineTop = 150;
    return (
        <>
            <div className={styles.container}>
                <div id="underlineId" className={styles.underline} style={{top: `${underlineTop}px`}}></div>
                <div className={styles.title} style={{top: 0}}>
                    {text}
                </div>
            </div>
        </>
    )
}
export default Title;