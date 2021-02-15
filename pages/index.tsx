import Layout from 'components/Layout/Layout'
import Image from 'next/image'
import styles from 'styles/pages/index.module.scss'

export default function IndexPage () { 
	return ( 
		<Layout title="Home | Next.js + TypeScript Example">
			<div id={styles.handshakeBanner}>
				<div className={styles.banner}>
					<div className={styles.bannerDesc}>
						<h1 className={styles.titleBanner}>
							Professional Business & Tax Advisors
						</h1>
						<p>
							Ipsum mollitia reprehenderit similique dicta dolor itaque? 
							Recusandae dolores dolores ut nisi animi Tempore 
						</p>
					</div>
				</div>
			</div>
			<div className={styles.cards} >
				<div className={styles.card}
					id={styles.card1}>
					<h1>
						About Us
					</h1>
					<p>
						Ipsum esse iusto recusandae voluptatum tempore fugit! 
						Repellat hic ad omnis nemo natus Vero nihil voluptatibus 
						eveniet ratione accusantium porro officiis accusamus. 
						Obcaecati esse omnis alias quisquam ducimus mollitia. Deserunt
					</p>
				</div>
				<div className={styles.card}
					id={styles.card2}>
					<h1>
						Services
					</h1>
					<li>Taxation</li>
					<li>Business Advisory</li>
					<li>SMSF</li>
					<li>Cloud Accounting</li>
				</div>
			</div>
			<div className={styles.clients}>
				<h1>Our Clients</h1>
				<img src="logos.png" width="auto" height="100%" />
			</div>
		</Layout>
	)
}
