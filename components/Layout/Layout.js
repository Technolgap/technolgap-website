// Other imports

import styles from './Layout.module.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// Layout component definition

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.Layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
