'use client'
import { useState } from 'react';
import PostsCard from './PostsCard'
import { Posts } from '@/service/posts';

type Props = {
  posts: Posts[];
  categories: string[];
}

const ALL_POSTS = 'ALL_POSTS'

export default function PostsList({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS)
  const filterPosts =
    selected === ALL_POSTS
      ? posts
      : posts.filter(post => post.category === selected)

  const handleClick = (category: string) => {
    setSelected(category)
  }
  return (
    <div className='flex justify-between'>
      <div className='flex flex-wrap'>
        {filterPosts.map(post => <PostsCard key={post.path} post={post} width="300"/>)}
      </div>
      <div className='text-center p-5'>
        <div className='font-bold text-xl border-b-4 border-cyan-300'>Category</div>
        <div onClick={() => handleClick(ALL_POSTS)} className='hover:text-cyan-300'>All Posts</div>
        {categories.map((category, index) => <div key={index} onClick={() => handleClick(category)} className='hover:text-cyan-300'>{category}</div>)}
      </div>
    </div>
  )
}
