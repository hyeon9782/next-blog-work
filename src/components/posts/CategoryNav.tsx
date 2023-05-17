import React from 'react'

export default function CategoryNav() {

  const category = ["All Posts", "my story", "frontend", "backend", "javascript"]  
  return (
    <div className='text-center p-5'>
        <div className='font-bold text-xl border-b-4 border-cyan-300'>Category</div>
        {category.map((item, index) => <div key={index} className='hover:text-cyan-300'>{item}</div>)}
    </div>
  )
}
