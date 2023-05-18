import ContactForm from '@/components/contact/ContactForm'
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
      <ContactForm />
    </div>
  )
}
