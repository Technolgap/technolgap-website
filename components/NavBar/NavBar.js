import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useRouter } from 'next/router';


// const router = useRouter();
// console.log(router);

function getRoute(){
    const router = useRouter();
    console.log(router.pathname);
    return router.query;

}

/* const NavBar = () => 

<div  className={styles.NavBar}>

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
 */


 export default function NavBar(){
    const router = useRouter();
    console.log(router.pathname);


    let href1 = `/`;
    let className1 = "";
    if (router.pathname == href1){
         className1 = `${styles.activePage}`;
    }else{
        className1 = "";
    }

    let href2 = `/about`
    let className2 = "";
    if (router.pathname == href2){
         className2 = `${styles.activePage}`;
    }else{
        className2 = "";
    }
    
    


    return <div  className={styles.NavBar}>

    <div className = {styles.technolgap}>technolgap</div>
  
    <div className = {styles.navButtons}>
        <div className = {className1}></div>  
  
        <Link href = {`\\`}>
              <h4>home</h4>
        </Link>
        
    </div>
    
     <div className = {styles.navButtons}>
           <div className = {className2}></div>
  
          <Link href = "/about">
               <h4>about</h4>
          </Link>
      
      </div> 
    
  </div>;

 }