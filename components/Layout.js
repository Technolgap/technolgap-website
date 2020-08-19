// Other imports

import styles from "./Layout.module.scss";
import NavBar from "./NavBar"
import Footer from "./Footer"

// Layout component definition

const Layout = ({ children }) => {
  return (
    <>
    <NavBar />
    <div className={styles.Layout}>
      {children}
    </div>
    <Footer /> 
    </>
  )
}

export default Layout;