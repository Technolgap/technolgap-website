import styles from "./Section.module.scss";
import Link from 'next/link';
import { useState } from "react";

function Section(props){
    const {title, body, buttons, color} = props;
    const [onHover, setOnHover] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(-1);

    return(
        <div className={styles.Section} style={{backgroundColor: color}}>
            <div className={styles.jumbotron}>
                <h1 className={styles.HQTitle}>{title}</h1>
                <p className={styles.HQText}>{body}</p>
                <div className={styles.centering}>
                    {buttons.map((button_text, index) => <Link href="/about">
                        <button type="button" style={{ backgroundColor: hoveredButton == index ? 'white' : `${color}`, color: hoveredButton == index ? `${color}`: 'white'}} 
                        onMouseEnter= {()=> {setOnHover(true); setHoveredButton(index)}}
                        onMouseLeave= {() => {setOnHover(false); setHoveredButton(-1)}}
                     className={styles.button}>{button_text}</button></Link>)}
                </div>
            </div>
        </div>
    )
}

export default Section;