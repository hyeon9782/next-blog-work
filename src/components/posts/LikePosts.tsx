import { getPostsWithFeatured } from '@/service/posts';
import React from 'react'
import PostsCard from './PostsCard';

export default async function LikePosts() {
  const posts = await getPostsWithFeatured(false);
  return (
    <div>
      <div className='p-5 font-bold text-3xl'>You may like</div>
      <div className='flex'>
        {posts && posts.map((post, index) => <PostsCard key={index} post={post}/>)}
      </div>
    </div>
  )
}
