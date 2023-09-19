import { cssBundleHref } from '@remix-run/css-bundle';

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

export const links = () => [
	{ rel: 'stylesheet', href: stylesheet }
];

import styles from './styles/global.module.css';

function Layout() {
	return (
		<main className='max-w-3xl mx-auto'>
			<header>
				<Link to='/'>
					<h1>Remix Test</h1>
				</Link>
			</header>
			<Outlet />
			<footer>
				Copyright 2023
			</footer>
		</main>
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
			<body>
				<Layout />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
