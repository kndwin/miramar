import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
			<div className={styles.topHeader}>
				<span>
					<FontAwesomeIcon icon={faClock} className={styles.icons} />
					Mon - Fri: 09:00-17:00, Sat & Sun by appointments
				</span>
				<span>
					<FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
					admin@mirra.com.au
				</span>
				<span>
					<FontAwesomeIcon icon={faPhone} className={styles.icons} />
					0401618363
				</span>
			</div>
      <nav className={styles.navBar}>
        <Link href="/">
					<a>
						<img src="miramar-logo.png" 
							className={styles.logo}
							alt="Logo of Mirarmar - Accounts & Advisors" />
					</a>
        </Link>
				<div className={styles.navLinks}>
					<Link href="/about-us">
						<a>About Us</a>
					</Link>
					<Link href="/services">
						<a>Services</a>
					</Link>
					<Link href="/resources">
						<a>Resources</a>
					</Link>
					<Link href="/contact-us">
						<a>Contact Us</a>
					</Link>
				</div>
      </nav>
    </header>
		<main className={styles.main}>
			{children}
		</main>
    <footer className={styles.footer}>
      <span>Miramar footer</span>
    </footer>
  </div>
)

export default Layout
