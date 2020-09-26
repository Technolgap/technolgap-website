import styles from "./Form.module.scss";

const Form = () => 

    <div className={styles.Form}> 
    <p>In order to join, you must be incoming or current student in Computer Science, Software Engineering or Computer Systems Engineering at an accredited university.</p>
    <div id="signup"><form className={styles.signUp} name="signup-form" action="https://formspree.io/mzbjnbdz" method="post">
            
        <input type="text" name="name" id="full-name" placeholder="full name*" required></input>
        
        <input type="email" name="_replyto" id="email-address" placeholder="email*" required></input>


        <input type="text" name="text" id="linkedin" placeholder="linkedin profile link*" required></input>

        <select name="gender" id="gender" required>
            <option value="gender" selected disabled>gender*</option>
            <option value="woman">woman</option>
            <option value="man">man</option>
            <option value="non-binary">non-binary</option>
            <option value="other">other</option>
        </select>

        <select name="school" id="school" required>
            <option value="school" selected disabled>school*</option>
            <option value="carleton">carleton university</option>
            <option value="uottawa">university of ottawa</option>
            <option value="algonquin">algonquin college</option>
            <option value="other">other</option>
        </select>

        <input type="text" name="name" id="program" placeholder="program*" required></input>

        <input type="text" name="name" id="program" placeholder="referral"></input> <br />

        <label for="message">what are you hoping to get out of joining Technolgap?*</label><br />
        <textarea name="message" className={styles.textMessage} id="message" placeholder="  " required></textarea>< br />

        <label for="message">what is the most exciting thing about software development for you?*</label><br />
        <textarea name="message" className={styles.textMessage} id="message" placeholder="  " required></textarea><br />

        <button type="submit" value="submit">submit</button>

        {/* <input type="hidden" name="_next" value="/about" /> */}

    
    </form></div>

    </div>;

export default Form;