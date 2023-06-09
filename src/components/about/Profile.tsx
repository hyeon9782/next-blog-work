import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImage from '../../../public/images/profile.png'

export default function Profile() {
  return (
    <section className='text-center'>
        <Image
          className='rounded-full mx-auto'
          src={profileImage} 
          alt="Picture of the author" 
          width={250} 
          height={250}
        />
        <h2 className='text-3xl font-bold mt-2'>Hi, I`m Jeongho</h2>
        <h3 className='text-xl font-semibold'>Front-end developer</h3>
        <p>성장하는 개발자 현정호입니다.</p>
        <Link href="/contact">
          <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>  
        </Link>    
    </section>
  )
}
