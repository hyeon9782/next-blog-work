'use client'
import { Posts } from '@/service/posts'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

type Props = {
  post : Posts;
}

export default function PostsCard({ post }: Props) {

  const router = useRouter();

  return (
    <article className='m-5 shadow-lg rounded-md' onClick={() => router.push(`/posts/${post.path}`)}>
      <Image
        className='w-full' 
        src={`/images/posts/${post.path}.png`} 
        alt="이미지"
        width={300}
        height={200}
      />
      <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{post.date.toString()}</time>
          <div className='text-lg font-bold'>{post.title}</div>
          <p className='w-full truncate text-center'>{post.description}</p>
          <span className='text-sm rounded-lg bg-green-100 px-2 my-2'>{post.category}</span>
      </div>
    </article>
  )
}
