import styles from "./NavBar.module.scss";
import Link from "next/link";

const NavBar = () => 
<div className={styles.NavBar}>

  <div className = {styles.technolgap}>technolgap</div>

  <div className = {styles.navButtons}>
      <div className = {styles.activePage}></div>  

      <Link href = {`\\`}>
            <h4>home</h4>
      </Link>
      
  </div>
  
   <div id = 'about' className = {styles.navButtons}>
         <div className = {styles.activePage}></div>

        <Link href = "/about">
             <h4>about</h4>
        </Link>
    
    </div> 
  
</div>;

export default NavBar;