import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	Link
} from '@remix-run/react';
import stylesheet from "./styles/tailwind.css"
import globalcss from "./styles/global.module.css"

export const links = () => [
	{ rel: 'stylesheet', href: stylesheet }
];

function Layout() {
	return (
		<div className='max-w-5xl mx-auto'>
			<header className='flex p-4'>
				<Link to={"/"}>
					<h1 className='text-2xl cursor-pointer'>My Remix App</h1>
				</Link>
				<nav className='ml-auto'>
					<ul className='flex gap-5 items-center'>
						<li>
							<Link to={'/posts'}>
								Lista de Posts
							</Link>
						</li>
						<li>
							<Link to={'/about'}>
								Ir a about
							</Link>
						</li>
						<li>
							<Link to={'/posts/create'}>
								Crear un Post
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className=' mx-4 my-10'>
				<Outlet />
			</main>
			<footer>
				Copyright 2023
			</footer>
		</div>
	)
}


export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body className='bg-slate-100'>
				<Layout />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
