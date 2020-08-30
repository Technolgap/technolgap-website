import styles from "./NavBar.module.scss";
import ActiveLink from "./ActiveLink";


const NavBar=()=>
  

   <div  className={styles.NavBar}>

    <div className = {styles.technolgap}>technolgap</div>
  

        <ActiveLink href = {`/`}>
                <h4>home</h4>
        </ActiveLink >
        

        <ActiveLink  href = "/about">
            <h4>about</h4>
        </ActiveLink >
        
  </div>;

export default NavBar;