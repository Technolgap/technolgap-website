import { useRouter} from 'next/router';
import styles from "./NavBar.module.scss";
import Link from 'next/link';



export default function ActiveLink({children,href}){
    const router = useRouter();
 
    return(
        <div className = {styles.navButtons}> 
       
        
        <Link href={href} >
             <h4>{children}</h4>
         </Link>
        <div className = {`${router.pathname===href?styles.activePage : styles.inactivePage}`}>{children}</div>   
       </div>
    );


}


/* export default function ActiveLink({children,href}){
    const router = useRouter();
 
    return(
        <li className = {styles.navItem}> 
       
        <span className = {`${router.pathname===href?styles.activePage : styles.inactivePage}`}>{children}</span>   
        <Link href={href} >
             <h4>{children}</h4>
         </Link>
        
       </li>
    );


} */