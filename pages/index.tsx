import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Legendary Site</title>
				<meta name="description" content="Top 10 Site of All Time" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <main className="container mt-6 mx-auto">
                <h1 className="text-5xl font-bold text-center mb-4">
					Kepler Boyce
				</h1>
                <p className="text-lq text-center mb-8">
					Very cool stuff
				</p>
                <div className="flex justify-center">
                </div>
            </main>
		</div>
	)
}

export default Home
