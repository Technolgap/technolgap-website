import styles from "./Form.module.scss";

const Questions = () => 

    <section className={styles.questionForm}> 
    <p>If you have any questions about Technolgap, please fill out the following form. We will do our best to get back to you within 4 business days.</p>

    <div><form className={styles.inputForm} name="question-form" action="https://formspree.io/xgepvwrv" method="post">
            
        <input type="text" name="name" id="full-name" placeholder="full name*" required></input>< br/>
        
        <input type="email" name="email" id="email-address" placeholder="email*" required></input>< br/>
        <textarea name="Question(s)" className={styles.textMessage} id="Question(s)" placeholder="enter question(s) here" required></textarea>< br />

        <button type="submit" value="submit">send</button>

    </form></div>

    </section>;

export default Questions;