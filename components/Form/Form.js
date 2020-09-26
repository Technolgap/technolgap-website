import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";
import styles from "./Form.module.scss";

const Form = () => 

    <div className={styles.Form}> 
    <p>In order to join, you must be a female incoming or current student to an Ottawa-based post-secondary institution studying in a field related to software development.</p>
    
    <div className={styles.box}><form className={styles.signUp} name="signup-form" action="https://formspree.io/mzbjnbdz" method="post">
            
        <input type="text" name="name" id="full-name" placeholder="full name*" required></input>< br/>
        
        <input type="email" name="_replyto" id="email-address" placeholder="email*" required></input>


        <input type="text" name="linkedin" id="linkedin" placeholder="linkedin profile link*" required></input>

        <select name="gender" id="gender" required>
            <option value="gender" selected disabled>gender*</option>
            <option value="woman">woman</option>
            <option value="man">man</option>
            <option value="non-binary">non-binary</option>
            <option value="other">other</option>
        </select>

        <input type="text" name="other-gender" id="other-gender" placeholder="  if other gender, please specify (put N/A otherwise)*" required></input>

        <select name="school" id="school" required>
            <option value="school" selected disabled>school*</option>
            <option value="carleton">carleton university</option>
            <option value="uottawa">university of ottawa</option>
            <option value="algonquin">algonquin college</option>
            <option value="other">other</option>
        </select>

        <input type="text" name="other-school" id="other-school" placeholder="  if other school, please specify (put N/A otherwise)*" required></input>


        <input type="text" name="name" id="program" placeholder="program*" required></input>

        <input type="text" name="name" id="program" placeholder="referral"></input> <br />

        <label>what are you hoping to get out of joining Technolgap?*</label><br />
        <textarea name="message" className={styles.textMessage} id="message" placeholder="  " required></textarea>< br />

        <label for="message">what is the most exciting thing about software development for you?*</label><br />
        <textarea name="message" className={styles.textMessage} id="message" placeholder="  " required></textarea><br />

        <button type="submit" value="submit">sign up</button>
    
    </form></div>

    </div>;

export default Form;