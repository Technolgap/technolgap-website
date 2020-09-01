import Head from 'next/head';
// Other imports

import styles from './Layout.module.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// Layout component definition

const Layout = ({ children }) => {
  return (
    <>
      <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://uicdn.toast.com/tui-calendar/latest/tui-calendar.css"
      />
      </Head>
      <NavBar />
      <div className={styles.Layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
