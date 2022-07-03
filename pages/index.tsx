import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Legendary Site</title>
				<meta name="description" content="Top 10 Site of All Time" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

            <main className="container mt-6 px-4 max-w-3xl">
                <h1 className="text-5xl font-bold text-center mb-4">
					Kepler Boyce
				</h1>
                <p className="text-lq mb-8">
					Welcome to my legendary website
				</p>
            </main>
		</div>
	)
}
