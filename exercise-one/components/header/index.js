/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
