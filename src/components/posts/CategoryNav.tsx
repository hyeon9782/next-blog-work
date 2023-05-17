'use client'

import { getPostsWithCategory } from "@/service/posts"

export default function CategoryNav({ }) {

  const category = ["All Posts", "my story", "frontend", "backend", "javascript"]  

  // const handleClick = (category) => {
  //   getPostsWithCategory(category)
  // }

  return (
    <div className='text-center p-5'>
        <div className='font-bold text-xl border-b-4 border-cyan-300'>Category</div>
        {category.map((item, index) => <div key={index} onClick={() => handleClick()} className='hover:text-cyan-300'>{item}</div>)}
    </div>
  )
}
