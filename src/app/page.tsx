import Profile from '@/components/about/Profile'
import FeaturedPosts from '@/components/posts/FeaturedPosts'
import LikePosts from '@/components/posts/LikePosts'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex justify-center'>
        <Profile />
      </div>
      <div>
        <FeaturedPosts />
      </div>
      <div>
        <LikePosts />
      </div>
    </div>
  )
}
