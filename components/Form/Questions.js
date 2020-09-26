import styles from "./Form.module.scss";

const Questions = () => 

    <div className={styles.Form}> 
    <p>If you have any questions about Technolgap, please fill out the following form. We will do our best to get back to you within 4 business days.</p>

    <div className={styles.box}><form className={styles.signUp} name="question-form" action="https://formspree.io/xgepvwrv" method="post">
            
        <input type="text" name="name" id="full-name" placeholder="full name*" required></input>< br/>
        
        <input type="email" name="_replyto" id="email-address" placeholder="email*" required></input>< br/>
        <textarea name="Question(s)" className={styles.textMessage} id="Question(s)" placeholder="enter question(s) here" required></textarea>< br />

        <button type="submit" value="submit">send</button>

    </form></div>

    </div>;

export default Questions;