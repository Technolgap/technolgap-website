import styles from "./Title.module.scss";

function Title(props) {
    const {text} = props;
    return (
        <>
        <div className={styles.underline}></div>
        <div className={styles.title}>
            {text}
        </div>
        </>
    )
}

//const Title = ({ children })  => <div className={styles.Title}>  {children} </div>;

export default Title;