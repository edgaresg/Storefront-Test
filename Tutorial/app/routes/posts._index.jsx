import { useLoaderData } from "@remix-run/react"
import { db } from "../services/db"

export const loader = async () => {
    const posts = await db.post.findMany()

    return { posts }
}

export default function Index() {
    const { posts } = useLoaderData()

    return (
        <section>
            <h2>Lista de Posts</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </section>
    )
}