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
		<div className=' bg-black'>
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
			{posts.map(post => (
				<div key={post.id} className='post'>
					<div style={{display: "flex"}}>
						<h2 style={{fontSize: "28px"}}>{post.title}</h2>
						<span style={{
							display: "flex", 
							justifyContent: "center", 
							alignItems: "center", 
							marginLeft: "auto",
							backgroundColor: "black",
							color: "white",
							width: 30,
							height: 30
							}}
						>x</span>
					</div>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
}
