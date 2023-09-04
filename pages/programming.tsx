import Head from 'next/head'
import Header from '../components/Header'
import NiceLink from '../components/NiceLink'

export default function Programming() {
	return (
		<div>
			<Head>
				<title>Kepler Boyce | Programming</title>
				<meta name="description" content="Programming" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="container mt-6 px-4 max-w-3xl flex flex-col gap-4">
				<h1 className="text-5xl font-bold text-center mb-4">
					Programming projects
				</h1>
                <p>
                    You can check out my programming projects on my
                    <NiceLink left text="Github page" href="https://github.com/keplerboyce" />
                    !
                </p>
                <p>Below are quick showcases for a few of my coolest projects.</p>

                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold mt-4">Gulpin.games</h2>
                    <NiceLink
                        className="text-sm no-underline"
                        text="View on Github"
                        href="https://github.com/SVWEFSBRWHWBCOTSEID"
                    />
                </div>
                <p>
                    This is a website that I'm creating with a friend for playing 1v1 online games
                    like Ultimate Tic-Tac-Toe, Connect 4, Pokemon Chess, and eventually other games.
                    The website is still in development, but you can try out what we have so far at
                    <NiceLink left text="gulpin.games" href="https://gulpin.games" />
                    .
                </p>
                <p>
                    The frontend is made with Next.js and TailwindCSS, while the backend is made with
                    the Actix framework in Rust. We use a Postgres database for storing games, users, etc.
                    and a Redis store for maintaining sessions for logged in users. For real-time events
                    like making moves during a game, we use server-sent events. When a user makes a move,
                    an HTTP request is sent to the server with the move played, the server verifies that
                    the move was legal, and then broadcasts the event to the other user in the game.
                </p>

                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold mt-4">
                        Minitimer
                    </h2>
                    <NiceLink
                        className="text-sm no-underline"
                        text="View on Github"
                        href="https://github.com/KeplerBoyce/minitimer"
                    />
                </div>
                <p>
                    This is a speedcubing timer website/desktop app that I'm working on. With existing
                    timer websites, there are some features that I always wish would be added and some
                    features that I don't personally find useful. Minitimer is my version of a timer
                    website with all of the features that I want. My goal is to keep it as minimal as
                    possible so that it is simple but powerful. I don't have a version deployed yet,
                    but it is soon to come!
                </p>
                <p>
                    The website is made with React (Create React App) and the desktop app uses Tauri
                    to package the website into a WebView.
                </p>
			</main>
		</div>
	)
}
