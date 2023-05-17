import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import image from '../../../public/images/profile.png'

export default function Profile() {
  return (
    <div className='w-64'>
        <div className='rounded-full h-60 w-60 bg-black'>
            <Image src={image} alt="이미지" />
        </div>
        <div className='text-24'>Hi, I`m Jeongho</div>
        <div>Front-end developer</div>
        <p>성장하는 개발자 현정호입니다.</p>
        <div className='flex justify-center bg-amber-400 rounded-2xl w-36'>
            <Link href="/contact">Contact Me</Link>
        </div>
    </div>
  )
}
