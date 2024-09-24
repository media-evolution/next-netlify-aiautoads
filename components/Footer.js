import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.textAboveLogo}>Powered by</p>
        <img src="/logo-media-evolution.svg" alt="Media Evolution Logo" className={styles.logo} />
        
        <nav>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/">Home</Link> {/* Link to the homepage */}
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/data-deletion">Data Deletion</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
