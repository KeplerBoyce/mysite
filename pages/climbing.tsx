import Head from 'next/head'
import Header from '../components/Header'
import NiceLink from '../components/NiceLink'

export default function Climbing() {
	return (
		<div>
			<Head>
				<title>Kepler Boyce | Climbing</title>
				<meta name="description" content="Climbing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="container mt-6 px-4 max-w-3xl">
				<h1 className="text-5xl font-bold text-center mb-4">
					Rock climbing
				</h1>
				<NiceLink text="Playlist of my climbing videos" href="https://youtube.com/playlist?list=PLXVMn8d7341wGvS50QVbGxxuwXrPuDGld" />
			</main>
		</div>
	)
}
