'use client'
import { Posts } from '@/service/posts'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

type Props = {
  post : Posts;
  width : string;
}

export default function PostsCard({ post, width }: Props) {

  const router = useRouter();

  return (
    <div className={'m-5 shadow-lg'} onClick={() => router.push(`/posts/${post.path}`)}>
      <div className=''>
          <Image 
            src={`/images/posts/${post.path}.png`} 
            alt="이미지"
            width={width === "450" ? 450 : 400}
            height={300}
          />
      </div>
      <div className='p-5 text-center'>
          <div className='text-end'>{post.date}</div>
          <div>{post.title}</div>
          <div>{post.description}</div>
          <div>{post.category}</div>
      </div>
    </div>
  )
}
