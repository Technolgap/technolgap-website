import { useRouter} from 'next/router';
import styles from "./NavBar.module.scss";
import Link from 'next/link';

export default function ActiveLink({children,href}){
    const router = useRouter();
 
    return(
        <div className = {styles.navButtons}> 
        <div className = {`${router.pathname===href?styles.activePage : styles.inactivePage}`}>{children}</div>
        <Link href = {href}>
            {children}
        </Link>
        
       </div>
    );


}