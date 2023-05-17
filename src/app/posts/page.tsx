import PostsCard from '@/components/posts/PostsCard';
import { getPosts } from '@/service/posts';
import React from 'react'

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className='flex flex-wrap'>
      {posts.map(post => <PostsCard key={post.path} post={post} width="300"/>)}
    </div>
  )
}
