import styles from "./Title.module.scss";

function Title(props) {
    
    const {text, space} = props;
    return (
        <>
            <div className={styles.container}>
                <div id="underlineId" className={styles.underline} style={{top: 150}}></div>
                <div className={styles.title} style={{top: 0}}>
                    {text}
                </div>
            </div>
        </>
    )
}
export default Title;