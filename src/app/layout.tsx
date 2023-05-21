import Header from '@/components/common/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: '정호의 블로그',
    template: '정호의 블로그 | %s'
  },
  description: '프론트엔드 개발자 정호의 블로그',
  icons: {
    icon: 'favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className='max-w-7xl w-11/12 my-0 mx-auto'>
          {children}
        </section>
      </body>
    </html>
  )
}
