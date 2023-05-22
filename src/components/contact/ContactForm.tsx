'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';

type Form = {
    from: string;
    subject: string;
    message: string;
}

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: ''
}

export default function ContactForm() {

  const [form, setForm] = useState<Form>(DEFAULT_DATA)

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}));
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
    .then(() => {
      setBanner({message: '성공했어!', state: 'success'})
      setForm(DEFAULT_DATA)
    })
    .catch(() => {
      setBanner({message: '메일 전송에 실패했습니다. 다시 시도해 주세요', state: 'error'})
    })
    .finally(() => {
      setTimeout(() => {
        setBanner(null)
      },3000)
    })
    
    
  } 
  
  return (
    <>
        {banner && <Banner banner={banner}/>}
        <div className='flex justify-center'>
            <form onSubmit={onSubmit}>
                <div className='w-96 bg-black text-white'>
                <div className='p-5 w-full'>
                    <label htmlFor='from' className='text-start pb-2'>Your Email</label>
                    <input type="email" id="from" name="from" required autoFocus value={form.from} onChange={onChange} className='w-full text-black'/>
                </div>
                <div className='px-5 pb-5'>
                    <label htmlFor='subject' className='text-start pb-2'>Subject</label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={onChange} className='w-full text-black'/>
                </div>
                <div className='px-5 pb-5'>
                    <label htmlFor='message' className='text-start pb-2'>Message</label>
                    <textarea id="message" name="message" value={form.message} onChange={onChange} className='w-full h-80 text-black' />
                </div>
                <div className='px-5 pb-5'>
                    <button className='w-full bg-amber-400 text-black'>Submit</button>
                </div>
                </div>
            </form>
        </div>
    </>
  )
}
