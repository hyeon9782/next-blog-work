import Profile from '@/components/about/Profile'
import React from 'react'

export const metadata = {
  title: 'About Me',
  description: '정호의 커리어 소개'
}

export default function AboutPage() {
  return (
    <div>
      <div className='flex justify-center'>
        <Profile />
      </div>
      <div className='text-center'>
        <div>
          <strong className='text-2xl'>Who am I?</strong> 
          <p>
            개발을 좋아하는 프론트엔드 개발자<br />
            꿈을 실현시키는 사람 현정호!
          </p>
          <strong className='text-2xl'>Career</strong> 
          <p>
            주식회사 컨택틱 (2021 ~ 2022) <br />
            당근마켓 (2023 ~ 2025) <br />
            우아한형제들 (2025 ~ 2030)
          </p>
          <strong className='text-2xl'>Skills</strong>
          <p>
            JavaScript, TypeScript, React, Next, Vue <br />
            Python, FastAPI, Node, Express  
          </p> 
        </div>
      </div>
    </div>
  )
}
