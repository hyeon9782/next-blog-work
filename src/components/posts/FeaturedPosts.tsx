import { Posts } from '@/service/posts'
import React from 'react'
import PostsCard from './PostsCard'
type Props = {
    posts: Posts
}
export default function FeaturedPosts({ posts }: Props) {
  return (
    <section className='my-4'>
        {posts.map(post => <PostsCard post={post} key={post.path} width='300'/>)}
    </section>
  )
}
