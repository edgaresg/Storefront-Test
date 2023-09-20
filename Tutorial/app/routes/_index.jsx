import { useLoaderData } from '@remix-run/react';
import { db } from '../services/db';
import Post from '../components/global/post/Post';

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
			<h2 className=' text-4xl'>Home</h2>
			<section className='flex flex-col gap-10 mt-10'>
				{posts.map((post, index) => (<Post key={index} post={post} />))}
			</section>
		</div>
	);
}
