import { Posts } from '@/service/posts';
import PostsCard from './PostsCard';

type Props = {
    posts: Posts[];
}

export default function PostsGrid({ posts }: Props) {
  return (
    <div className='flex flex-wrap'>
      {posts.map(post => <PostsCard key={post.path} post={post} width='450'/>)}
    </div>
  )
}
