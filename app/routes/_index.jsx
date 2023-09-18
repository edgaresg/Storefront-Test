import { Link, useLoaderData } from '@remix-run/react';
import { db } from '../services/db';

export const meta = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export const loader = async () => {
	const posts = await db.post.findMany()

	return { posts }
}

export default function Index() {
	const { posts } = useLoaderData()

	return (
		<div>
			<h1>My Remix App</h1>
			<nav>
				<ul>
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
			<Link to={'/posts'}>
				<h2>Lista de Posts</h2>
			</Link>
			{posts.slice(0, 1).map(post => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}
