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
            <option value="Woman">woman</option>
            <option value="Man">man</option>
            <option value="Non-Binary">non-binary</option>
            <option value="Other">other</option>
        </select>

        <input type="text" name="other-gender" id="other-gender" placeholder="  if other gender, please specify (put N/A otherwise)*" required></input>

        <select name="school" id="school" required>
            <option value="school" selected disabled>school*</option>
            <option value="Carleton University">carleton university</option>
            <option value="University of Ottawa">university of ottawa</option>
            <option value="Algonquin College">algonquin college</option>
            <option value="Other">other</option>
        </select>

        <input type="text" name="other-school" id="other-school" placeholder="  if other school, please specify (put N/A otherwise)*" required></input>


        <input type="text" name="program" id="program" placeholder="program*" required></input>

        <input type="text" name="referral" id="referral" placeholder="referral"></input> <br />

        <label>what are you hoping to get out of joining Technolgap?*</label><br />
        <textarea name="Why Technolgap?" className={styles.textMessage} id="Why Technolgap?" placeholder="  " required></textarea>< br />

        <label for="message">what is the most exciting thing about software development for you?*</label><br />
        <textarea name="Software Development" className={styles.textMessage} id="Software Development" placeholder="  " required></textarea><br />

        <button type="submit" value="submit">sign up</button>
    
    </form></div>

    </div>;

export default Form;