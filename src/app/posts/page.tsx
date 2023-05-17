

import CategoryNav from '@/components/posts/CategoryNav';
import PostsCard from '@/components/posts/PostsCard';
import PostsList from '@/components/posts/PostsList';
import { getPosts } from '@/service/posts';

export default async function PostsPage() {

  const posts = await getPosts();
  const categories = [...new Set(posts.map(post => post.category))]

  return (
    <PostsList posts={posts} categories={categories} />
  )
}
