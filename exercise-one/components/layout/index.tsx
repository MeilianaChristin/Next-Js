import Head from 'next/head';
import { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children:ReactNode,
  pageTitle:string
}

function Layout(props:LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      {/* meta data for SEO */}
      <Head>
        <title>
          Next JS Basic |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Website Next JS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
