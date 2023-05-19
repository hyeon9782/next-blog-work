import Profile from '@/components/about/Profile'
import CarouselPosts from '@/components/posts/CarouselPosts'
import FeaturedPosts from '@/components/posts/FeaturedPosts'
import LikePosts from '@/components/posts/LikePosts'
import PostsGrid from '@/components/posts/PostsGrid'
import { getPosts } from '@/service/posts'
import Image from 'next/image'

export default async function Home() {

  const posts = await getPosts()

  const featuredPosts = posts.filter(post => post.featured === true)
  
  return (
    <div>
      <div className='flex justify-center'>
        <Profile />
      </div>
      <FeaturedPosts posts={featuredPosts}/>
      <CarouselPosts />
    </div>
  )
}
