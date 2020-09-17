import styles from "./Title.module.scss";

function Title(props) {
    const {underlineTop, titleTop, text} = props;
    return (
        <>
        <div className={styles.underline} style={{top: underlineTop}}></div>
        <div className={styles.title} style={{top: titleTop}}>
            {text}
        </div>
        </>
    )
}

//const Title = ({ children })  => <div className={styles.Title}>  {children} </div>;

export default Title;