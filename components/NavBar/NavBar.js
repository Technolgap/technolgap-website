import styles from "./NavBar.module.scss";
import ActiveLink from "./ActiveLink";
const leafLogo =  require("../../images/NavBar/leafLogo.svg");


const NavBar=()=>
  
   
    <div  className={styles.NavBar}>
   
        <div className = {styles.technolgap}> 
        <img src = {leafLogo} className = {styles.logo}></img>
        technolgap
        </div>
  
        <ActiveLink href = {`/`}>
            <h4>home</h4>
        </ActiveLink >

        <ActiveLink  href = "/about">
            <h4>about</h4>
        </ActiveLink >
        
    </div>;

export default NavBar;