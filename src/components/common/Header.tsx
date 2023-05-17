import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='flex h-20 bg-slate-200 text-slate-700 font-bold justify-between'>
        <div className='flex items-center text-3xl pl-5'><Link href="/">Hyeon`log</Link></div>
        <nav className='flex items-center'>
            <ul className='flex text-2xl'>
                <li className='pr-5'><Link href="/">home</Link></li>
                <li className='pr-5'><Link href="/about">about</Link></li>
                <li className='pr-5'><Link href="/posts">posts</Link></li>
                <li className='pr-5'><Link href="/contact">contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}
