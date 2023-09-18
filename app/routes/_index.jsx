import { Link, useLoaderData } from '@remix-run/react';

export const meta = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' },
	];
};

export const loader = () => {
	const data = {
		posts: [
			{
				id: 1,
				title: 'Post 1',
				content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
			},
			{
				id: 2,
				title: 'Post 2',
				content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
			},
		]
	}

	return data
}

export default function Index() {
	const { posts } = useLoaderData()
	
	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
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
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
}
