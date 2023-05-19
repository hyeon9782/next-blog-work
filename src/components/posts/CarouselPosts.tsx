import { getPosts } from "@/service/posts"
import PostsCard from "./PostsCard"
import Carousel from "react-multi-carousel"
import MultiCarousel from "../common/MultiCarousel"

export default async function CarouselPosts() {
    const posts = await getPosts()
  return (
    <section className="my-4">
        <h2 className="text-2xl font-bold my-2">You May Like</h2>
        <MultiCarousel>
            {posts.map(post => (
                <PostsCard key={post.path} post={post} />
            ))}
        </MultiCarousel>
    </section>
  )
}
