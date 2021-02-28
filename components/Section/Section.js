import styles from "./Section.module.scss";
import Link from 'next/link';

function Section(props){
    const {title, body, buttons, color} = props;
    return(
        <div className={styles.Section} style={{ backgroundColor: color }}>
            <div className={styles.jumbotron}>
                <h1 className={styles.HQTitle}>{title}</h1>
                <p className={styles.HQText}>{body}</p>
                <div className={styles.centering}>
                    {buttons.map((button_text) => <Link href="/about"><button type="button" style={{ backgroundColor: color }} className={styles.button}>{button_text}</button></Link>)}
                </div>
            </div>
        </div>
    )
}

export default Section;