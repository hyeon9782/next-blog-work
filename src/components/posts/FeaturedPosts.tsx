import { getPosts } from '@/service/posts'
import React from 'react'
import PostsGrid from './PostsGrid'

export default async function FeaturedPosts() {
    const posts = await getPosts()
    const featuredPosts = posts.filter(post => post.featured === true)
  return (
    <section className='my-4'>
        <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
        <PostsGrid posts={featuredPosts}/>
    </section>
  )
}
