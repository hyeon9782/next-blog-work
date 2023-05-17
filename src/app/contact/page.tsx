import Link from 'next/link'
import React from 'react'

import { BsGithub } from 'react-icons/bs'
import { FaBloggerB } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className='text-center'>
      <div className='text-4xl font-bold p-5'>Contact me</div>
      <div className=''>hyeon9782@gmail.com</div>
      <div className='flex justify-center text-5xl'>
        <Link href="https://github.com/hyeon9782" className='p-2'><BsGithub /></Link>
        <Link href="https://velog.io/@hyeon9782" className='p-2'><FaBloggerB /></Link>
      </div>
      <div className='text-4xl font-bold p-5'>Or Send me an email</div>
      <div className='flex justify-center'>
        <div className='w-96 bg-black text-white'>
          <div className='p-5 w-full'>
            <div className='text-start pb-2'>Your Email</div>
            <input type="text" className='w-full'/>
          </div>
          <div className='px-5 pb-5'>
            <div className='text-start pb-2'>Subject</div>
            <input type="text" className='w-full'/>
          </div>
          <div className='px-5 pb-5'>
            <div className='text-start pb-2'>Message</div>
            <textarea className='w-full h-80' />
          </div>
          <div className='px-5 pb-5'>
            <button className='w-full bg-amber-400 text-black'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
