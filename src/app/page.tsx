import Profile from '@/components/about/Profile'
import CarouselPosts from '@/components/posts/CarouselPosts'
import FeaturedPosts from '@/components/posts/FeaturedPosts'

export default function HomePage() {
  return (
    <section>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </section>
  )
}
