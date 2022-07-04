import Head from 'next/head'
import CaptionImage from '../components/CaptionImage'
import Header from '../components/Header'

export default function BlenderUnity() {
	return (
		<div>
			<Head>
				<title>Legendary Site | Blender/Unity</title>
				<meta name="description" content="Top 10 Site of All Time" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="container mt-6 px-4 max-w-3xl">
				<h1 className="text-5xl font-bold text-center mb-8">
					Blender and Unity projects
				</h1>

				<section className="flex flex-col gap-6 mb-12">
					<p>
						I have been messing around with Unity and making various unfinished projects for a while. Since I'm bad at art, one roadblock I had
						in all of those projects was making decent graphics. Making good 2D art seemed difficult to me, so I started learning low-poly 3D
						modeling and animation in Blender. I thought that Blender would be very difficult to learn based on what I had heard about it, but it
						has been surprisingly easy, at least for the simple stuff that I have made so far.
					</p>
					<div className="grid grid-cols-2 gap-2 items-center">
						<CaptionImage image="tree.png" caption="First tree" />
						<CaptionImage image="tree1.png" caption="Second tree" />
					</div>
					<div className="grid grid-cols-2 gap-2 items-center">
						<CaptionImage image="palmtree.png" caption="Simple palm tree" />
						<CaptionImage image="duck.png" caption="Duck" />
					</div>
				</section>
			</main>
		</div>
	)
}
