import { redirect } from "@remix-run/node"
import { db } from "../services/db"

export const action = async ({params}) => {
    await db.post.delete({where: {id: parseInt(params.postId)}})
    return redirect("/")
} 