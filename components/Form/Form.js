import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";

const Form = () => 

    <section className={styles.Form}> 
        <p>In order to join, you must identify as a woman and be incoming or current student to an Ottawa-based post-secondary institution studying in a field related to software development.</p>
        
        <div><form className={styles.inputForm} name="signup-form" action="https://formspree.io/mzbjnbdz" method="post">
                
            <input type="text" name="name" id="full-name" placeholder="full name*" required></input>< br/>
            
            <input type="email" name="email" id="email-address" placeholder="email*" required></input>

            <input type="text" name="linkedin" id="linkedin" placeholder="linkedin profile link*" required></input>

            <select id="gender" name="gender" defaultValue="gender*" required>
                <option value='gender*' disabled>gender*</option>
                <option value="Woman">woman</option>
                <option value="Man">man</option>
                <option value="Non-Binary">non-binary</option>
                <option value="Other">other</option>
            </select>

            <input type="text" name="other-gender" id="other-gender" placeholder="if other gender, please specify (put N/A otherwise)*" required></input>

            <select name="school" id="school" defaultValue="school*" required>
                <option value="school*" disabled>school*</option>
                <option value="Carleton University">carleton university</option>
                <option value="University of Ottawa">university of ottawa</option>
                <option value="Algonquin College">algonquin college</option>
                <option value="Other">other</option>
            </select>

            <input type="text" name="other-school" id="other-school" placeholder="if other school, please specify (put N/A otherwise)*" required></input>

            <input type="text" name="program" id="program" placeholder="program*" required></input>

            <input type="text" name="referral" id="referral" placeholder="referral"></input> <br />

            <label>what are you hoping to get out of joining Technolgap?*</label><br />
            <textarea name="Why Technolgap?" className={styles.textMessage} id="Why Technolgap?" placeholder="  " required></textarea>< br />

            <label>what is the most exciting thing about software development for you?*</label><br />
            <textarea name="Why Software Dev?" className={styles.textMessage} id="Why Software Dev?" placeholder="  " required></textarea><br />

            <button type="submit" value="submit">sign up</button>
        
        </form></div>

    </section>;

export default Form;