import Profile from '@/components/about/Profile'
import CarouselPosts from '@/components/posts/CarouselPosts'
import FeaturedPosts from '@/components/posts/FeaturedPosts'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center'>
        <Profile />
      </div>
      <FeaturedPosts />
      <CarouselPosts />
    </div>
  )
}
