import styles from "./Title.module.scss";

function Title(props) {
    const {underlineTop, titleTop, text, space} = props;
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