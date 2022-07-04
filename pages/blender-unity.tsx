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

				<section className="flex flex-col gap-4 mb-12">
					<p>
						I've been messing around with Unity and making various unfinished projects for a while. Since I'm bad at art, one roadblock I had
						in all of those projects was making decent graphics. Making good 2D art seemed difficult to me, so I started learning low-poly 3D
						modeling and animation in Blender. I thought that Blender would be very difficult to learn based on what I had heard about it, but it
						has been surprisingly easy, at least for the simple stuff that I have made so far.
					</p>
					<p>
						I'm not sure what kind of game I want to make yet, but I figured that I can start by creating a bunch of models to learn and I might end
						up using them down the road. I thought it would be funny if you played as a duck in the game, so I modeled and animated a duck.
					</p>
				</section>

				<section className="flex flex-col gap-4 mb-12">
					<h1 className="text-2xl font-bold">
						Blender work samples
					</h1>
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
