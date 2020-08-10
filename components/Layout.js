// Other imports

import styles from "./Layout.module.scss";
import NavBar from "./NavBar"

// Layout component definition

const Layout = ({ children }) => {
  return (
    <>
    <NavBar />
    <div className={styles.Layout}>
      {children}
    </div>
    </>
  )
}

export default Layout;