import Profile from '@/components/about/Profile'
import CarouselPosts from '@/components/posts/CarouselPosts'
import FeaturedPosts from '@/components/posts/FeaturedPosts'

export default function HomePage() {
  return (
    <section>
      <Profile />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  )
}
