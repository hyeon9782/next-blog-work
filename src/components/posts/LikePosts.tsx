
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostsCard from './PostsCard';
import { getPosts } from "@/service/posts";

export default async function LikePosts() {
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  const posts = await getPosts();
  return (
    <div>
      <div className='p-5 font-bold text-3xl'>You may like</div>
      <div className='flex'>
        {posts && posts.map((post, index) => <PostsCard key={index} post={post} width="300"/>)}
      </div>
      
    </div>
  )
}
