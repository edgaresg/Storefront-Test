import { useLoaderData } from "@remix-run/react"
import { db } from "../services/db"
import Post from "../components/global/post/Post"

export const loader = async () => {
    const posts = await db.post.findMany()

    return { posts }
}

export default function Index() {
    const { posts } = useLoaderData()

    return (
        <section className='flex flex-col gap-10'>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </section>
    )
}