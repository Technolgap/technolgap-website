import styles from "./Quote.module.scss";

function Quote(props) {
    const {topSpace, space, boxHeight, shadowColour, borderColour, text} = props;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.shadowBox} style={{backgroundColor: shadowColour, height: boxHeight}}>
                    <div className={styles.whiteBox} style={{border: '3px solid', borderColor: borderColour, height: boxHeight}}>
                        <p className={styles.textBox} style={{paddingTop: topSpace, padding: space}}> {text}</p>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}


export default Quote;