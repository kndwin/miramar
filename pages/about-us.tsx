import Link from 'next/link'
import Layout from 'components/Layout/Layout'

export default function AboutPage () {
	return ( 
		<Layout title="Miramar">
			<h1>About</h1>
			<p>This is the about page</p>
			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</Layout>
	)
}

