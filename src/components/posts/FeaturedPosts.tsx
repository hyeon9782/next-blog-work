import { getPostsWithFeatured } from '@/service/posts'
import React from 'react'
import PostsCard from './PostsCard';

export default async function FeaturedPosts() {
  const posts = await getPostsWithFeatured(true);
  
  return (
    <>
      <div className='text-3xl font-bold p-5'>
        Featured Posts
      </div>
      <div className='flex flex-wrap'>
        {posts && posts.map(((post, index) => <PostsCard key={index} post={post}/>))}
      </div>
    </>
  )
}
