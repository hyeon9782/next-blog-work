import CategoryNav from '@/components/posts/CategoryNav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hyeong ` log | Posts',
  description: 'my posts',
}

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <section>{children}</section>
    </div>
  )
}
