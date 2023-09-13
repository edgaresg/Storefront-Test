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

export const links = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

import styles from './styles/global.module.css';

function Layout() {
	return (
		<>
			<header>
				<Link to='/'>
					<h1>Remix Test</h1>
				</Link>
			</header>
			<Outlet />
			<footer>
				Copyright 2023
			</footer>
		</>
	)
}


export default function App() {
	return (
		<html lang='en' className={styles.root}>
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
