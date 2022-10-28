import Head from 'next/head'
import Header from '../components/Header'

export default function Programming() {
	return (
		<div>
			<Head>
				<title>Kepler Boyce | Programming</title>
				<meta name="description" content="Programming" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="container mt-6 px-4 max-w-3xl">
				<h1 className="text-5xl font-bold text-center mb-4">
					Programming projects
				</h1>
				<p className="text-lq mb-8">
					Programming
				</p>
			</main>
		</div>
	)
}
