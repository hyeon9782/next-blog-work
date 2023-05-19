import { Posts } from '@/service/posts';
import PostsCard from './PostsCard';

type Props = {
    posts: Posts[];
}

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className='grid gap-4 grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        posts.map(post => (
          <li key={post.path}>
            <PostsCard post={post} />
          </li>
        ))
      }
    </ul>
  )
}
