import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Head>
          <link rel="favicon" href="/favicon.ico"></link>
          <title>Begrato</title>
        </Head>
        <Image
          src="/images/banner.png"
          alt="Banner Begrato"
          height="300px"
          width="1980px"
        />
        <h1>Begrato</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link
            href="/https://play.google.com/store/apps/details?id=com.begrato">
            <a>PlayStore</a></Link>
        </li>
        <li>
          <Link href="/ios"><a>AppStore</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ul>
    </nav>
  );
}
