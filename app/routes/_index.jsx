import { Link } from "@remix-run/react";

export const meta = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>My Remix App</h1>
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

		</div>
	);
}
